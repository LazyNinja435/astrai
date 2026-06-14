# Decision Record: Event-sourced team memory, no shared mutable files

**Date:** 2026-06-12
**Status:** Accepted

---

## Decision

Replace shared hand-edited memory aggregates (including the `decisions.md` index) with an event-sourced model: per-session learnings are written as one immutable event file per session (`.ai/memory/events/<user>/<date>-<task-slug>.json`), compacted per-user into `.ai/memory/snapshots/<user>.json`, and folded locally at read time into gitignored derived views (`sandbox/memory/`) by `scripts/memory/fold.ts`. Decision records become write-once files in `.ai/memory/decisions/` with **no index** — discovery is by globbing, newest first.

## Context

Shared hand-edited memory files (a decisions index, mutable team ledgers) conflict as soon as two contributors work concurrently — every merge collides on the same lines. Aggregate state stored in committed files (counters, flags) is the root cause: it forces multiple writers onto one file.

## Alternatives Considered

- **Keep the index, merge carefully** — still one file with N writers; conflicts are reduced, not removed.
- **Per-user mutable ledgers** — removes cross-user conflicts but still stores computed aggregates and invites in-place edits.
- **Event sourcing (chosen)** — one immutable file per session, single writer per committed file, aggregates computed at read time.

## Rationale

No committed file ever has two writers; all aggregate state (`seenCount`, `users`, `autoAnswer`, `systemic`) is computed locally at read time, never stored in committed files. The fold script is deterministic, Node-builtins-only, and optional — the plain-JSON format works without it.

## Consequences

- Positive: zero merge conflicts on memory; deterministic, auditable derivation; memory stays small via compaction and the graduation ladder.
- Negative: reading team knowledge requires a local fold (or reading raw events); the fold script is the one sanctioned exception to the no-dependencies philosophy.
- The former `decisions.md` index is deleted; its two compressed superseded entries were preserved as record files.

## Related

- Rules: `.ai/rules/project/memory-events.md`
- Skill: `.ai/skills/astrai/memory-harvest/SKILL.md`
