# Memory Events

> Write invariants for the event-sourced team memory under `.ai/memory/events/` and `.ai/memory/snapshots/`. Core principle: **no committed file ever has two writers; all aggregate state is computed locally at read time, never stored.**

## Rule: One Immutable Event Per Session

- After a substantive work session, write **exactly ONE new event file** to `.ai/memory/events/<user>/<YYYY-MM-DD>-<task-slug>.json` (see `.ai/skills/astrai/memory-harvest/SKILL.md` for the schema).
- Event files are append-only and immutable: **never edit, merge, or delete an existing event file** — the only sanctioned deletion is compaction (`scripts/memory/fold.ts --compact`), which folds a user's old events into that user's snapshot atomically.
- New knowledge = new event file. No counters, no in-place updates, no merging of memory JSON.

## Rule: Snapshots Are Owner-Only, Script-Only

- `.ai/memory/snapshots/<user>.json` is the compacted aggregate for one user. Only that user's compaction run writes it, and only via `scripts/memory/fold.ts --compact --user <name>` — never by hand, never for a teammate.
- Snapshot updates and the deletion of the events they fold must land in the same commit (atomic).

## Rule: Derived Views Are Never Committed

- The team-wide aggregate (`sandbox/memory/knowledge.json`, `sandbox/memory/KNOWLEDGE.md`) is computed locally at read time by `scripts/memory/fold.ts`. `sandbox/` is gitignored and local-only.
- Computed fields (`seenCount`, `users`, `autoAnswer`, `systemic`) exist only in the derived view (and, after compaction, per-user in snapshots) — never hand-author them.
- Agents read the derived view; they never write it by hand.

## Rule: No Shared Mutable Memory Files

- Never create a memory file that multiple contributors edit (shared indexes, team-wide ledgers, mutable aggregates). That is the failure mode this model removes: concurrent contributors conflict on every merge.
- Decision records (`.ai/memory/decisions/`) are write-once files with no index — discover them by globbing the directory, newest first.
- Durable curated context (`project.md`, `constraints.md`, `glossary.md`, `open-questions.md`) remains hand-edited, but it is curated reference material, not per-session learnings. Per-session learnings go through events.

## Rule: The Fold Script Is Optional Tooling

`scripts/memory/fold.ts` is deterministic, uses Node builtins only, and is the sanctioned exception to AstrAI's no-dependencies philosophy. The file format works without it — events and snapshots are plain JSON any agent can read and fold by the rules above.

## Related

- Rules: `project/memory-boundaries.md`
- Skills: `astrai/memory-harvest/SKILL.md`, `astrai/memory-update/SKILL.md`
- Agents: `astrai/memory-curator.md`
- Protocols: `astrai/memory-update-flow.md`
