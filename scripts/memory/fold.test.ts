/**
 * Fixture test for scripts/memory/fold.ts.
 *
 * Run: npx tsx scripts/memory/fold.test.ts
 * Plain assertions, no test framework, Node builtins only.
 * Exit code 0 on pass, 1 on failure.
 */
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import {
  compactUser,
  computeHygieneWarnings,
  defaultPaths,
  foldKnowledge,
  keyForEntry,
  runFold,
  slugify,
  type MemoryEvent,
  type Snapshot,
} from "./fold";

let failures = 0;
function assert(condition: boolean, message: string): void {
  if (condition) {
    console.log(`ok   - ${message}`);
  } else {
    failures += 1;
    console.error(`FAIL - ${message}`);
  }
}
function assertEq(actual: unknown, expected: unknown, message: string): void {
  assert(
    JSON.stringify(actual) === JSON.stringify(expected),
    `${message} (expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)})`,
  );
}

// ---------------------------------------------------------------------------
// Fixture
// ---------------------------------------------------------------------------

const NOW = new Date("2026-06-12T12:00:00.000Z");
const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "fold-test-"));
const paths = defaultPaths(tmpRoot);
fs.mkdirSync(paths.snapshotsDir, { recursive: true });
fs.mkdirSync(paths.eventsDir, { recursive: true });

// Snapshot user 1: Alice — one clarification (seenCount 2, no flag), one systemic correction.
const alice: Snapshot = {
  user: "Alice",
  lastUpdated: "2026-05-01T00:00:00.000Z",
  sessions: { total: 3 },
  clarifications: [
    {
      context: "auth_service",
      topic: "config",
      question: "Which environment file should local runs use?",
      answer: "Use .env.example as the base.",
      seenCount: 2,
      lastUpdated: "2026-05-01T00:00:00.000Z",
      autoAnswer: false,
    },
  ],
  corrections: [
    {
      context: "auth_service",
      topic: "delegation",
      mistake: "Edited the generated client directly.",
      fix: "Regenerate from the schema instead.",
      seenCount: 1,
      lastUpdated: "2026-05-01T00:00:00.000Z",
      systemic: true, // stored flag must survive even with seenCount 1
    },
  ],
  failurePatterns: [],
  observations: [],
};

// Snapshot user 2: Bob — same clarification key as Alice,
// plus a single-seen stale failure (>180d) used by the compaction prune test below.
const bob: Snapshot = {
  user: "Bob",
  lastUpdated: "2026-04-20T00:00:00.000Z",
  sessions: { total: 1 },
  clarifications: [
    {
      context: "auth_service",
      topic: "config",
      question: "Which environment file should local runs use?",
      answer: ".env.example.",
      seenCount: 1,
      lastUpdated: "2026-04-20T00:00:00.000Z",
      autoAnswer: false,
    },
  ],
  corrections: [],
  failurePatterns: [
    {
      context: "payments",
      topic: "timing",
      symptom: "List not refreshed after submit.",
      rootCause: "Missing wait for reload.",
      fix: "Wait for the summary element before asserting.",
      resolved: true,
      seenCount: 1,
      lastUpdated: "2025-10-01T00:00:00.000Z", // >180 days old, seenCount 1 → prune in compact
    },
  ],
  observations: [],
};

fs.writeFileSync(path.join(paths.snapshotsDir, "Alice.json"), JSON.stringify(alice, null, 2));
fs.writeFileSync(path.join(paths.snapshotsDir, "Bob.json"), JSON.stringify(bob, null, 2));

// 3 events. The clarification key duplicates Alice's + Bob's entry; Carol is a
// third distinct user → autoAnswer must flip to true via the distinct-users rule.
const clarKey =
  "auth-service:config:" + slugify("Which environment file should local runs use?");
const carolEvent: MemoryEvent = {
  user: "Carol",
  task: "ticket-111",
  context: "auth_service",
  date: "2026-06-10",
  outcomes: [
    {
      kind: "clarification",
      topic: "config",
      key: clarKey,
      question: "Which environment file should local runs use?",
      answer: ".env.example (confirmed).",
    },
  ],
};
const carolEvent2: MemoryEvent = {
  user: "Carol",
  task: "ticket-222",
  context: "payments",
  date: "2026-06-09",
  outcomes: [
    {
      kind: "failure-pattern",
      topic: "timing",
      key: "payments:timing:" + slugify("List not refreshed after submit."),
      symptom: "List not refreshed after submit.",
      rootCause: "Missing wait for reload.",
      fix: "Wait for the summary element before asserting.",
      resolved: true,
    },
  ],
};
// Old event (>60 days) for Bob — drives the --check warning and the compaction.
const bobOldEvent: MemoryEvent = {
  user: "Bob",
  task: "ticket-333",
  context: "auth_service",
  date: "2026-01-05",
  outcomes: [
    {
      kind: "correction",
      topic: "cleanup",
      key: "auth-service:cleanup:" + slugify("Missing teardown step."),
      mistake: "Missing teardown step.",
      fix: "Add a teardown helper.",
    },
  ],
};

fs.mkdirSync(path.join(paths.eventsDir, "Carol"), { recursive: true });
fs.mkdirSync(path.join(paths.eventsDir, "Bob"), { recursive: true });
fs.writeFileSync(
  path.join(paths.eventsDir, "Carol", "2026-06-10-ticket-111.json"),
  JSON.stringify(carolEvent, null, 2),
);
fs.writeFileSync(
  path.join(paths.eventsDir, "Carol", "2026-06-09-ticket-222.json"),
  JSON.stringify(carolEvent2, null, 2),
);
fs.writeFileSync(
  path.join(paths.eventsDir, "Bob", "2026-01-05-ticket-333.json"),
  JSON.stringify(bobOldEvent, null, 2),
);

// ---------------------------------------------------------------------------
// 1. Key normalization
// ---------------------------------------------------------------------------

assertEq(
  keyForEntry("clarifications", alice.clarifications![0]),
  clarKey,
  "snapshot entry key matches event key for same question",
);

// ---------------------------------------------------------------------------
// 2. Fold (default mode)
// ---------------------------------------------------------------------------

const run = runFold(paths, NOW);
const k = run.knowledge;

assertEq(run.snapshotsLoaded, 2, "2 snapshots loaded");
assertEq(run.eventsLoaded, 3, "3 events loaded");

assertEq(k.clarifications.length, 1, "clarifications dedupe to one entry");
const clar = k.clarifications[0];
assertEq(clar.seenCount, 4, "clarification seenCount = 2 (Alice) + 1 (Bob) + 1 (Carol event)");
assertEq(clar.users, ["Alice", "Bob", "Carol"], "clarification users are distinct contributors");
assertEq(clar.autoAnswer, true, "autoAnswer true at 3 distinct users");
assertEq(clar.answer, "Use .env.example as the base.", "highest-seenCount contributor's answer wins");

assertEq(k.corrections.length, 2, "two correction entries (Alice snapshot + Bob event)");
const storedFlagCorrection = k.corrections.find((e) => e.users.includes("Alice"))!;
assertEq(storedFlagCorrection.systemic, true, "stored systemic flag survives with seenCount 1");
const eventCorrection = k.corrections.find((e) => e.users.includes("Bob"))!;
assertEq(eventCorrection.systemic, false, "single-seen event correction not systemic");

assertEq(k.failurePatterns.length, 1, "failure dedupes snapshot + event by key");
assertEq(k.failurePatterns[0].seenCount, 2, "failure seenCount = 1 snapshot + 1 event");
assertEq(k.failurePatterns[0].systemic, true, "failure systemic at seenCount >= 2");

assert(
  fs.existsSync(path.join(paths.outDir, "knowledge.json")) &&
    fs.existsSync(path.join(paths.outDir, "KNOWLEDGE.md")),
  "knowledge.json and KNOWLEDGE.md written",
);
const mdText = fs.readFileSync(path.join(paths.outDir, "KNOWLEDGE.md"), "utf8");
assert(
  mdText.includes("Which environment file should local runs use?"),
  "KNOWLEDGE.md contains the high-signal clarification",
);

// ---------------------------------------------------------------------------
// 3. Hygiene warnings
// ---------------------------------------------------------------------------

const warnings = computeHygieneWarnings(paths.eventsDir, NOW);
assert(
  warnings.some((w) => w.includes("events/Bob") && w.includes("older than 60 days")),
  "stale-event warning raised for Bob",
);
assert(!warnings.some((w) => w.includes("events/Carol")), "no warning for fresh Carol events");

// ---------------------------------------------------------------------------
// 4. Compaction
// ---------------------------------------------------------------------------

const compact1 = compactUser(paths.eventsDir, paths.snapshotsDir, "Bob", NOW);
assertEq(compact1.foldedEvents, 1, "compaction folds exactly the one >60d Bob event");
assertEq(compact1.prunedEntries, 1, "compaction prunes the stale single-seen failure");
assert(
  !fs.existsSync(path.join(paths.eventsDir, "Bob", "2026-01-05-ticket-333.json")),
  "folded event file deleted",
);

const bobAfter = JSON.parse(
  fs.readFileSync(path.join(paths.snapshotsDir, "Bob.json"), "utf8"),
) as Snapshot;
assertEq(bobAfter.sessions!.total, 2, "sessions.total incremented by folded event");
assertEq(bobAfter.corrections!.length, 1, "correction from event landed in snapshot");
assertEq(bobAfter.corrections![0].seenCount, 1, "new snapshot entry starts at seenCount 1");
assertEq(bobAfter.failurePatterns!.length, 0, "stale failure pruned from snapshot");

// Idempotency: second compaction is a no-op.
const compact2 = compactUser(paths.eventsDir, paths.snapshotsDir, "Bob", NOW);
assertEq(compact2.foldedEvents, 0, "second compaction folds nothing");
assertEq(compact2.prunedEntries, 0, "second compaction prunes nothing");
assertEq(compact2.snapshotWritten, false, "second compaction does not rewrite snapshot");

// ---------------------------------------------------------------------------
// 5. Pure fold cold start
// ---------------------------------------------------------------------------

const empty = foldKnowledge([], [], null);
assertEq(empty.clarifications.length, 0, "cold-start fold yields empty sections");

// ---------------------------------------------------------------------------

fs.rmSync(tmpRoot, { recursive: true, force: true });

if (failures > 0) {
  console.error(`\n${failures} assertion(s) failed.`);
  process.exit(1);
}
console.log("\nAll fold.test.ts assertions passed.");
