# Protocol: Memory Update Flow

## Purpose

Orchestrate when and how to update project memory. Prevents memory bloat and ensures only durable information is recorded.

## Trigger

A durable decision, discovery, or context change has occurred.

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
[2] Classify → Decision, constraint, term, question, or project info?
    │
    ▼
[3] Check existing → Read target file. Already recorded?
    │
    ▼
[4] Write/Update → Use appropriate template
    │
    ▼
[5] Cross-reference → Link to related entries
```

## Related

- Skills: `astrai/memory-update/SKILL.md`
- Rules: `project/memory-boundaries.md`
