# Protocol: Huddle Flow

## Purpose

Orchestrate huddle mode — a persistent, talk-only architectural conversation that resumes across sessions and writes only to `.ai/memory/`. Implementation is explicitly out of scope; it happens later in a fresh agent that reads `decisions.md`.

## Trigger

User enters huddle mode ("enter huddle mode", "let's huddle", "continue the huddle") or asks to explore architecture without building yet.

## Flow

```
Enter Huddle
    │
    ▼
[1] Load context → summary.md + recent sessions/ (chronological) + core memory
    │              (ideas/ and archive/ only on reference)
    ▼
[2] Resume → summarize where it left off, confirm with user
    │
    ▼
[3] Converse as architect → one question at a time, weigh 2-3 approaches, recommend
    │
    ▼
[4] Log → append to sessions/YYYY-MM-DD-<author>.md (append-only)
    │
    ▼
[5] Classify outcomes
    │
    ├── Settled → propose for decisions.md  ──► [user approves?] ── no ─► keep in session log
    │                                                              └─ yes ─► write decisions.md
    ├── Unresolved → open-questions.md / ideas/<topic>.md
    └── Still exploring → back to [3]
    │
    ▼
[6] Close out → write "next time start here"; if log over threshold,
                fold into summary.md (rewrite) + move old sessions to archive/
```

## Hard Gate

Writes are restricted to `.ai/memory/`. No code, plans, specs, or config — ever. `decisions.md` writes require explicit user approval.

## Roles

- **Huddle Architect** (`astrai/huddle-architect.md`): runs the conversation, logs, proposes decisions
- **User**: directs the discussion, approves what graduates to `decisions.md`

## Exit Criteria

Session logged, continuity note written, approved decisions promoted, summary compacted if needed.

## Related

- Skills: `astrai/huddle/SKILL.md`
- Agents: `astrai/huddle-architect.md`
- Rules: `project/memory-boundaries.md`
- Templates: `huddle-session.template.md`, `decision-record.template.md`
