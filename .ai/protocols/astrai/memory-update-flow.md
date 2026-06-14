# Protocol: Memory Update Flow

## Purpose

Orchestrate when and how to update project memory. Prevents memory bloat, prevents write conflicts between contributors, and ensures only durable information is recorded.

## Trigger

A durable decision, discovery, or context change has occurred — or a substantive work session is closing with learnings worth keeping.

## Flow

```
Significant Event
    │
    ▼
[1] Assess durability → Will this matter beyond this session?
    │
    ├── No → Stop. Do not write.
    │
    ▼
[2] Route by nature
    │
    ├── Per-session LEARNING (clarification answered, mistake corrected,
    │   failure diagnosed, reusable observation)
    │       → astrai/memory-harvest skill: write ONE immutable event file
    │         .ai/memory/events/<user>/<date>-<task-slug>.json,
    │         then refresh the derived view (scripts/memory/fold.ts)
    │
    └── Durable CURATED context
        │
        ▼
[3] Classify → Decision, constraint, term, question, or project info?
    │
    ├── Decision → new write-once record .ai/memory/decisions/YYYY-MM-DD-<slug>.md
    │              (no index — glob the directory, newest first)
    │
    └── Other → constraints.md / glossary.md / open-questions.md / project.md
    │
    ▼
[4] Check existing → Read target (or glob decisions/). Already recorded?
    │
    ▼
[5] Write → Use the appropriate template
    │
    ▼
[6] Cross-reference → Link to related entries
```

## Invariants

- Events and snapshots are never edited in place — see `rules/project/memory-events.md`
- Derived views (`sandbox/memory/`) are never committed
- No shared mutable memory files: one writer per committed file

## Related

- Skills: `astrai/memory-update/SKILL.md`, `astrai/memory-harvest/SKILL.md`
- Agents: `astrai/memory-curator.md`
- Rules: `project/memory-boundaries.md`, `project/memory-events.md`
