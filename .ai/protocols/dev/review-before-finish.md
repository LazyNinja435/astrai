# Protocol: Review Before Finish

## Purpose

Ensure every task undergoes self-review and validation before being declared complete.

## Trigger

Before declaring any task as complete.

## Flow

```
Implementation Complete
    │
    ▼
[1] Self-Review → Against all applicable rules
    │
    ▼
[2] Safety Check → Safety rules specifically
    │
    ▼
[3] Test Suite → All must pass
    │
    ▼
[4] Build/Types → Must pass
    │
    ▼
[5] Cleanup → No dead code, debug output, unused imports
    │
    ▼
[6] Completeness → All planned steps done?
    │
    ▼
[7] Gate → Pass → Proceed to finish
    │        Fail → Fix and repeat
```

## Related

- Skills: `dev/verification-before-completion/`, `dev/finishing-a-development-branch/` (Superpowers)
