/**
 * fold.ts — deterministic fold of the event-sourced team memory.
 *
 * Sources (committed):
 *   .ai/memory/snapshots/<user>.json                  — compacted per-user baselines (owner-only writes, via --compact)
 *   .ai/memory/events/<user>/<date>-<task-slug>.json  — one immutable event per work session
 *
 * Derived (gitignored, local-only):
 *   sandbox/memory/knowledge.json — team-wide aggregate view, computed at read time
 *   sandbox/memory/KNOWLEDGE.md   — human-readable digest of high-signal entries
 *
 * Usage:
 *   npx tsx scripts/memory/fold.ts                          # fold + write derived views
 *   npx tsx scripts/memory/fold.ts --check                  # exit non-zero on hygiene warnings
 *   npx tsx scripts/memory/fold.ts --compact --user <name>  # fold old events into the user's snapshot
 *
 * OPTIONAL tooling: AstrAI itself has no dependencies — this script uses Node
 * builtins only and is the sanctioned exception to the no-scripts philosophy.
 * The file format (events/snapshots) is plain JSON and works without it; any
 * agent can read the raw files and apply the same fold rules by hand.
 *
 * Deterministic, no AI, no third-party packages.
 */
import * as fs from "node:fs";
import * as path from "node:path";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SectionName =
  | "clarifications"
  | "corrections"
  | "failurePatterns"
  | "observations";

export const SECTIONS: SectionName[] = [
  "clarifications",
  "corrections",
  "failurePatterns",
  "observations",
];

export interface LedgerEntry {
  context: string;
  topic?: string;
  seenCount?: number;
  lastUpdated?: string;
  autoAnswer?: boolean;
  systemic?: boolean;
  // clarification
  question?: string;
  answer?: string;
  // correction
  mistake?: string;
  fix?: string;
  // failure-pattern
  symptom?: string;
  rootCause?: string;
  resolved?: boolean;
  // observation
  note?: string;
  [extra: string]: unknown;
}

export interface Snapshot {
  user: string;
  lastUpdated?: string;
  sessions?: { total?: number };
  clarifications?: LedgerEntry[];
  corrections?: LedgerEntry[];
  failurePatterns?: LedgerEntry[];
  observations?: LedgerEntry[];
  [extra: string]: unknown;
}

export type OutcomeKind =
  | "clarification"
  | "correction"
  | "failure-pattern"
  | "observation";

export interface EventOutcome {
  kind: OutcomeKind;
  topic: string;
  key?: string;
  question?: string;
  answer?: string;
  mistake?: string;
  fix?: string;
  symptom?: string;
  rootCause?: string;
  resolved?: boolean;
  note?: string;
}

export interface MemoryEvent {
  user: string;
  task: string; // task id or slug
  context: string; // area/component slug
  date: string; // YYYY-MM-DD
  outcomes: EventOutcome[];
}

export interface LoadedEvent extends MemoryEvent {
  filePath: string;
}

export interface KnowledgeEntry extends LedgerEntry {
  seenCount: number;
  users: string[];
}

export interface Knowledge {
  generatedAt: string | null;
  clarifications: KnowledgeEntry[];
  corrections: KnowledgeEntry[];
  failurePatterns: KnowledgeEntry[];
  observations: KnowledgeEntry[];
}

const KIND_TO_SECTION: Record<OutcomeKind, SectionName> = {
  clarification: "clarifications",
  correction: "corrections",
  "failure-pattern": "failurePatterns",
  observation: "observations",
};

/** Events older than this are flagged by --check and folded by --compact. */
export const EVENT_RETENTION_DAYS = 60;
/** --check warns when a user's events directory holds more files than this. */
export const EVENT_FILE_LIMIT = 25;
/** --compact prunes snapshot entries with seenCount === 1 older than this. */
export const SNAPSHOT_PRUNE_DAYS = 180;
/** A clarification becomes autoAnswer at this many distinct contributors. */
export const AUTO_ANSWER_DISTINCT_USERS = 3;
/** A non-clarification entry becomes systemic at this total seenCount. */
export const SYSTEMIC_SEEN_COUNT = 2;
const DAY_MS = 24 * 60 * 60 * 1000;

// ---------------------------------------------------------------------------
// Keys
// ---------------------------------------------------------------------------

/** Normalize free text into a deterministic slug for dedup keys. */
export function slugify(text: string): string {
  return String(text ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function contentSlug(section: SectionName, entry: LedgerEntry): string {
  switch (section) {
    case "clarifications":
      return slugify(entry.question ?? "");
    case "corrections":
      return slugify(entry.mistake ?? "");
    case "failurePatterns":
      return slugify(entry.symptom ?? "");
    case "observations":
      return slugify(entry.note ?? "");
  }
}

/** Dedup key for an entry: <context>:<topic>:<content-slug>. */
export function keyForEntry(section: SectionName, entry: LedgerEntry): string {
  return `${slugify(entry.context ?? "")}:${slugify(entry.topic ?? "")}:${contentSlug(section, entry)}`;
}

function keyForOutcome(event: MemoryEvent, outcome: EventOutcome): string {
  if (outcome.key) return outcome.key;
  return keyForEntry(KIND_TO_SECTION[outcome.kind], {
    ...outcome,
    context: event.context,
  } as LedgerEntry);
}

// ---------------------------------------------------------------------------
// Loading
// ---------------------------------------------------------------------------

function readJson(filePath: string, warnings: string[]): unknown | undefined {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (err) {
    warnings.push(`Skipped unreadable JSON: ${filePath} (${(err as Error).message})`);
    return undefined;
  }
}

export function loadSnapshots(snapshotsDir: string, warnings: string[]): Snapshot[] {
  if (!fs.existsSync(snapshotsDir)) return [];
  const out: Snapshot[] = [];
  for (const name of fs.readdirSync(snapshotsDir).sort()) {
    if (!name.endsWith(".json")) continue;
    const parsed = readJson(path.join(snapshotsDir, name), warnings) as Snapshot | undefined;
    if (!parsed) continue;
    if (!parsed.user) parsed.user = name.replace(/\.json$/, "");
    out.push(parsed);
  }
  return out;
}

export function loadEvents(eventsDir: string, warnings: string[]): LoadedEvent[] {
  if (!fs.existsSync(eventsDir)) return [];
  const out: LoadedEvent[] = [];
  for (const userDir of fs.readdirSync(eventsDir).sort()) {
    const dirPath = path.join(eventsDir, userDir);
    if (!fs.statSync(dirPath).isDirectory()) continue;
    for (const name of fs.readdirSync(dirPath).sort()) {
      if (!name.endsWith(".json")) continue;
      const filePath = path.join(dirPath, name);
      const parsed = readJson(filePath, warnings) as MemoryEvent | undefined;
      if (!parsed) continue;
      if (!parsed.user) parsed.user = userDir;
      if (!Array.isArray(parsed.outcomes)) parsed.outcomes = [];
      out.push({ ...parsed, filePath });
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// Fold
// ---------------------------------------------------------------------------

interface Contribution {
  user: string;
  seenCount: number;
  lastUpdated: string; // ISO or YYYY-MM-DD
  storedAutoAnswer: boolean;
  storedSystemic: boolean;
  content: LedgerEntry;
}

function ts(value: string | undefined): number {
  const t = Date.parse(value ?? "");
  return Number.isNaN(t) ? 0 : t;
}

/** Pure fold: snapshots + events -> knowledge view. */
export function foldKnowledge(
  snapshots: Snapshot[],
  events: MemoryEvent[],
  generatedAt: string | null = null,
): Knowledge {
  const knowledge: Knowledge = {
    generatedAt,
    clarifications: [],
    corrections: [],
    failurePatterns: [],
    observations: [],
  };

  for (const section of SECTIONS) {
    const groups = new Map<string, Contribution[]>();

    const add = (key: string, contribution: Contribution) => {
      const list = groups.get(key);
      if (list) list.push(contribution);
      else groups.set(key, [contribution]);
    };

    for (const snapshot of snapshots) {
      for (const entry of snapshot[section] ?? []) {
        add(keyForEntry(section, entry), {
          user: snapshot.user,
          seenCount: Math.max(1, Number(entry.seenCount) || 1),
          lastUpdated: entry.lastUpdated ?? snapshot.lastUpdated ?? "",
          storedAutoAnswer: entry.autoAnswer === true,
          storedSystemic: entry.systemic === true,
          content: entry,
        });
      }
    }

    for (const event of events) {
      for (const outcome of event.outcomes ?? []) {
        if (KIND_TO_SECTION[outcome.kind] !== section) continue;
        add(keyForOutcome(event, outcome), {
          user: event.user,
          seenCount: 1,
          lastUpdated: event.date,
          storedAutoAnswer: false,
          storedSystemic: false,
          content: { ...outcome, context: event.context } as LedgerEntry,
        });
      }
    }

    const merged: Array<{ key: string; entry: KnowledgeEntry }> = [];
    for (const [key, contributions] of groups) {
      const seenCount = contributions.reduce((sum, c) => sum + c.seenCount, 0);
      const users = [...new Set(contributions.map((c) => c.user))].sort();
      // Content winner: highest individual seenCount; tie -> most recent.
      const winner = contributions.reduce((best, c) =>
        c.seenCount > best.seenCount ||
        (c.seenCount === best.seenCount && ts(c.lastUpdated) > ts(best.lastUpdated))
          ? c
          : best,
      );
      const lastUpdated = contributions.reduce(
        (max, c) => (ts(c.lastUpdated) > ts(max) ? c.lastUpdated : max),
        contributions[0].lastUpdated,
      );

      const entry: KnowledgeEntry = {
        context: winner.content.context,
        topic: winner.content.topic,
        ...pickContent(section, winner.content),
        seenCount,
        users,
        lastUpdated,
      } as KnowledgeEntry;

      if (section === "clarifications") {
        entry.autoAnswer =
          users.length >= AUTO_ANSWER_DISTINCT_USERS ||
          contributions.some((c) => c.storedAutoAnswer);
      } else {
        entry.systemic =
          seenCount >= SYSTEMIC_SEEN_COUNT ||
          contributions.some((c) => c.storedSystemic);
      }
      merged.push({ key, entry });
    }

    merged.sort(
      (a, b) => b.entry.seenCount - a.entry.seenCount || a.key.localeCompare(b.key),
    );
    knowledge[section] = merged.map((m) => m.entry);
  }

  return knowledge;
}

function pickContent(section: SectionName, entry: LedgerEntry): Partial<LedgerEntry> {
  switch (section) {
    case "clarifications":
      return { question: entry.question, answer: entry.answer };
    case "corrections":
      return { mistake: entry.mistake, fix: entry.fix };
    case "failurePatterns":
      return {
        symptom: entry.symptom,
        rootCause: entry.rootCause,
        fix: entry.fix,
        resolved: entry.resolved,
      };
    case "observations":
      return { note: entry.note };
  }
}

// ---------------------------------------------------------------------------
// Hygiene warnings (--check, also printed in default mode)
// ---------------------------------------------------------------------------

export function computeHygieneWarnings(eventsDir: string, now: Date): string[] {
  const warnings: string[] = [];
  if (!fs.existsSync(eventsDir)) return warnings;
  for (const userDir of fs.readdirSync(eventsDir).sort()) {
    const dirPath = path.join(eventsDir, userDir);
    if (!fs.statSync(dirPath).isDirectory()) continue;
    const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".json")).sort();
    if (files.length > EVENT_FILE_LIMIT) {
      warnings.push(
        `events/${userDir}: ${files.length} event files (limit ${EVENT_FILE_LIMIT}) — run: npx tsx scripts/memory/fold.ts --compact --user ${userDir}`,
      );
    }
    const stale = files.filter((f) => {
      const parsed = readJson(path.join(dirPath, f), []) as MemoryEvent | undefined;
      const dateStr = parsed?.date ?? f.slice(0, 10);
      return now.getTime() - ts(dateStr) > EVENT_RETENTION_DAYS * DAY_MS;
    });
    if (stale.length > 0) {
      warnings.push(
        `events/${userDir}: ${stale.length} event(s) older than ${EVENT_RETENTION_DAYS} days — run: npx tsx scripts/memory/fold.ts --compact --user ${userDir}`,
      );
    }
  }
  return warnings;
}

// ---------------------------------------------------------------------------
// Compaction (--compact --user <name>)
// ---------------------------------------------------------------------------

export interface CompactResult {
  foldedEvents: number;
  prunedEntries: number;
  snapshotWritten: boolean;
  deletedFiles: string[];
}

export function compactUser(
  eventsDir: string,
  snapshotsDir: string,
  user: string,
  now: Date,
): CompactResult {
  const warnings: string[] = [];
  const userEventsDir = path.join(eventsDir, user);
  const snapshotPath = path.join(snapshotsDir, `${user}.json`);

  const events = loadEvents(eventsDir, warnings)
    .filter((e) => e.user === user || e.filePath.startsWith(userEventsDir + path.sep))
    .filter((e) => now.getTime() - ts(e.date) > EVENT_RETENTION_DAYS * DAY_MS)
    .sort((a, b) => ts(a.date) - ts(b.date) || a.filePath.localeCompare(b.filePath));
  for (const w of warnings) console.warn(`WARN ${w}`);

  let snapshot: Snapshot;
  if (fs.existsSync(snapshotPath)) {
    snapshot = JSON.parse(fs.readFileSync(snapshotPath, "utf8")) as Snapshot;
  } else {
    snapshot = {
      user,
      lastUpdated: now.toISOString(),
      sessions: { total: 0 },
      clarifications: [],
      corrections: [],
      failurePatterns: [],
      observations: [],
    };
  }
  for (const section of SECTIONS) {
    if (!Array.isArray(snapshot[section])) snapshot[section] = [];
  }
  snapshot.sessions = snapshot.sessions ?? { total: 0 };

  let changed = false;

  // Fold events into the snapshot ledger.
  for (const event of events) {
    snapshot.sessions.total = (snapshot.sessions.total ?? 0) + 1;

    const eventIso = `${event.date}T00:00:00.000Z`;
    for (const outcome of event.outcomes ?? []) {
      const section = KIND_TO_SECTION[outcome.kind];
      if (!section) continue;
      const key = keyForOutcome(event, outcome);
      const list = snapshot[section] as LedgerEntry[];
      const existing = list.find((e) => keyForEntry(section, e) === key);
      if (existing) {
        existing.seenCount = (Number(existing.seenCount) || 1) + 1;
        Object.assign(
          existing,
          pickContent(section, { ...outcome, context: event.context } as LedgerEntry),
        );
        if (ts(eventIso) > ts(existing.lastUpdated)) existing.lastUpdated = eventIso;
      } else {
        list.push({
          context: event.context,
          topic: outcome.topic,
          ...pickContent(section, { ...outcome, context: event.context } as LedgerEntry),
          seenCount: 1,
          lastUpdated: eventIso,
        } as LedgerEntry);
      }
    }
    changed = true;
  }

  // Recompute flags: stored flag OR threshold (monotonic, idempotent).
  for (const entry of snapshot.clarifications ?? []) {
    const next =
      entry.autoAnswer === true ||
      (Number(entry.seenCount) || 1) >= AUTO_ANSWER_DISTINCT_USERS;
    if (next !== (entry.autoAnswer === true)) {
      entry.autoAnswer = next;
      changed = true;
    }
  }
  for (const section of ["corrections", "failurePatterns", "observations"] as SectionName[]) {
    for (const entry of (snapshot[section] as LedgerEntry[]) ?? []) {
      const next =
        entry.systemic === true || (Number(entry.seenCount) || 1) >= SYSTEMIC_SEEN_COUNT;
      if (next !== (entry.systemic === true)) {
        entry.systemic = next;
        changed = true;
      }
    }
  }

  // Prune: single-seen entries not updated for SNAPSHOT_PRUNE_DAYS.
  let prunedEntries = 0;
  for (const section of SECTIONS) {
    const list = snapshot[section] as LedgerEntry[];
    const kept = list.filter((e) => {
      const stale =
        (Number(e.seenCount) || 1) === 1 &&
        now.getTime() - ts(e.lastUpdated ?? snapshot.lastUpdated) > SNAPSHOT_PRUNE_DAYS * DAY_MS;
      if (stale) prunedEntries += 1;
      return !stale;
    });
    if (kept.length !== list.length) {
      snapshot[section] = kept;
      changed = true;
    }
  }

  const deletedFiles: string[] = [];
  let snapshotWritten = false;
  if (changed) {
    snapshot.lastUpdated = now.toISOString();
    fs.mkdirSync(snapshotsDir, { recursive: true });
    fs.writeFileSync(snapshotPath, JSON.stringify(snapshot, null, 2) + "\n", "utf8");
    snapshotWritten = true;
  }
  for (const event of events) {
    fs.unlinkSync(event.filePath);
    deletedFiles.push(event.filePath);
  }

  return { foldedEvents: events.length, prunedEntries, snapshotWritten, deletedFiles };
}

// ---------------------------------------------------------------------------
// KNOWLEDGE.md rendering
// ---------------------------------------------------------------------------

function md(text: unknown, max = 160): string {
  const s = String(text ?? "").replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
  return s.length > max ? s.slice(0, max - 1) + "…" : s;
}

export function renderKnowledgeMd(knowledge: Knowledge): string {
  const lines: string[] = [];
  lines.push("# Team Knowledge — generated digest");
  lines.push("");
  lines.push(
    "Derived by `scripts/memory/fold.ts` from `.ai/memory/snapshots/` + `.ai/memory/events/`. Do not edit — regenerate with `npx tsx scripts/memory/fold.ts`.",
  );
  if (knowledge.generatedAt) lines.push(`Generated: ${knowledge.generatedAt}`);
  lines.push("");

  const section = <T extends KnowledgeEntry>(
    title: string,
    entries: T[],
    isHigh: (e: T) => boolean,
    header: string,
    row: (e: T) => string,
  ) => {
    const high = entries.filter(isHigh);
    const rest = entries.length - high.length;
    lines.push(`## ${title}`);
    lines.push("");
    if (high.length === 0) {
      lines.push("_No high-signal entries yet._");
    } else {
      lines.push(header);
      lines.push(header.replace(/[^|]/g, "-"));
      for (const e of high) lines.push(row(e));
    }
    lines.push("");
    lines.push(`_${rest} additional candidate entr${rest === 1 ? "y" : "ies"} below threshold (see knowledge.json)._`);
    lines.push("");
  };

  section(
    "Clarifications (auto-answer)",
    knowledge.clarifications,
    (e) => e.autoAnswer === true,
    "| Context | Topic | Seen | Users | Question | Answer |",
    (e) =>
      `| ${md(e.context)} | ${md(e.topic)} | ${e.seenCount} | ${e.users.length} | ${md(e.question)} | ${md(e.answer)} |`,
  );
  section(
    "Corrections (systemic)",
    knowledge.corrections,
    (e) => e.systemic === true,
    "| Context | Topic | Seen | Users | Mistake | Fix |",
    (e) =>
      `| ${md(e.context)} | ${md(e.topic)} | ${e.seenCount} | ${e.users.length} | ${md(e.mistake)} | ${md(e.fix)} |`,
  );
  section(
    "Failure patterns (systemic)",
    knowledge.failurePatterns,
    (e) => e.systemic === true,
    "| Context | Topic | Seen | Symptom | Root cause | Fix |",
    (e) =>
      `| ${md(e.context)} | ${md(e.topic)} | ${e.seenCount} | ${md(e.symptom)} | ${md(e.rootCause)} | ${md(e.fix)} |`,
  );
  section(
    "Observations (systemic)",
    knowledge.observations,
    (e) => e.systemic === true,
    "| Context | Topic | Seen | Users | Note |",
    (e) =>
      `| ${md(e.context)} | ${md(e.topic)} | ${e.seenCount} | ${e.users.length} | ${md(e.note)} |`,
  );

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Orchestration
// ---------------------------------------------------------------------------

export interface FoldPaths {
  snapshotsDir: string;
  eventsDir: string;
  outDir: string;
}

export function defaultPaths(repoRoot: string): FoldPaths {
  return {
    snapshotsDir: path.join(repoRoot, ".ai/memory/snapshots"),
    eventsDir: path.join(repoRoot, ".ai/memory/events"),
    outDir: path.join(repoRoot, "sandbox/memory"),
  };
}

export interface FoldRunResult {
  knowledge: Knowledge;
  warnings: string[];
  snapshotsLoaded: number;
  eventsLoaded: number;
}

export function runFold(paths: FoldPaths, now: Date): FoldRunResult {
  const warnings: string[] = [];
  const snapshots = loadSnapshots(paths.snapshotsDir, warnings);
  const events = loadEvents(paths.eventsDir, warnings);
  const knowledge = foldKnowledge(snapshots, events, now.toISOString());
  warnings.push(...computeHygieneWarnings(paths.eventsDir, now));

  fs.mkdirSync(paths.outDir, { recursive: true });
  fs.writeFileSync(
    path.join(paths.outDir, "knowledge.json"),
    JSON.stringify(knowledge, null, 2) + "\n",
    "utf8",
  );
  fs.writeFileSync(
    path.join(paths.outDir, "KNOWLEDGE.md"),
    renderKnowledgeMd(knowledge) + "\n",
    "utf8",
  );

  return { knowledge, warnings, snapshotsLoaded: snapshots.length, eventsLoaded: events.length };
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function main(): void {
  const argv = process.argv.slice(2);
  const repoRoot = path.resolve(__dirname, "../..");
  const paths = defaultPaths(repoRoot);
  const now = new Date();

  if (argv.includes("--check")) {
    const warnings = computeHygieneWarnings(paths.eventsDir, now);
    if (warnings.length > 0) {
      for (const w of warnings) console.error(`WARN ${w}`);
      console.error(`fold --check: ${warnings.length} warning(s).`);
      process.exit(1);
    }
    console.log("fold --check: OK — event dirs within limits.");
    return;
  }

  if (argv.includes("--compact")) {
    const userIdx = argv.indexOf("--user");
    const user = userIdx >= 0 ? argv[userIdx + 1] : undefined;
    if (!user) {
      console.error("Usage: npx tsx scripts/memory/fold.ts --compact --user <name>");
      process.exit(2);
    }
    const result = compactUser(paths.eventsDir, paths.snapshotsDir, user, now);
    console.log(
      `compact ${user}: folded ${result.foldedEvents} event(s), pruned ${result.prunedEntries} snapshot entr${result.prunedEntries === 1 ? "y" : "ies"}, snapshot ${result.snapshotWritten ? "written" : "unchanged"}.`,
    );
    for (const f of result.deletedFiles) console.log(`deleted ${path.relative(repoRoot, f)}`);
    // Refresh derived views after compaction.
    runFold(paths, now);
    console.log("Derived views refreshed: sandbox/memory/knowledge.json, sandbox/memory/KNOWLEDGE.md");
    return;
  }

  const result = runFold(paths, now);
  const k = result.knowledge;
  const high = {
    clarifications: k.clarifications.filter((e) => e.autoAnswer).length,
    corrections: k.corrections.filter((e) => e.systemic).length,
    failurePatterns: k.failurePatterns.filter((e) => e.systemic).length,
    observations: k.observations.filter((e) => e.systemic).length,
  };
  console.log(
    `fold: ${result.snapshotsLoaded} snapshot(s) + ${result.eventsLoaded} event(s) -> sandbox/memory/knowledge.json`,
  );
  console.log(`clarifications: ${k.clarifications.length} (autoAnswer: ${high.clarifications})`);
  console.log(`corrections: ${k.corrections.length} (systemic: ${high.corrections})`);
  console.log(`failurePatterns: ${k.failurePatterns.length} (systemic: ${high.failurePatterns})`);
  console.log(`observations: ${k.observations.length} (systemic: ${high.observations})`);
  for (const w of result.warnings) console.warn(`WARN ${w}`);
}

if (require.main === module) {
  main();
}
