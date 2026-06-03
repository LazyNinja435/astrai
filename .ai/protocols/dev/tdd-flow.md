# Protocol: TDD Flow

## Purpose

Orchestrate test-driven development: write failing test → make it pass → refactor.

## Trigger

Feature work where tests should be written first.

## Flow

```
Feature Selected
    │
    ▼
[1] Write Failing Test → Red
    │
    ▼
[2] Minimal Code to Pass → Green
    │
    ▼
[3] Refactor → Clean up while green
    │
    ▼
[4] Repeat → Next behavior
```

## Related

- Skills: `dev/test-driven-development/` (Superpowers)
- Agent: `dev/implementer.md`
