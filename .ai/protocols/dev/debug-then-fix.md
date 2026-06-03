# Protocol: Debug Then Fix

## Purpose

Orchestrate systematic debugging: reproduce → isolate → understand → fix → verify → document.

## Trigger

Bug report, test failure, or unexpected behavior.

## Flow

```
Bug Reported
    │
    ▼
[1] Reproduce → Confirm bug exists
    │
    ▼
[2] Isolate → Narrow to smallest reproduction
    │
    ▼
[3] Understand → Root cause analysis
    │
    ▼
[4] Fix → Skill: dev/systematic-debugging (Superpowers)
    │        Agent: dev/debugger
    │
    ▼
[5] Verify → Fix verified, regression check
    │
    ▼
[6] Document → Template: debug-report.template.md
```

## Mandatory Steps

1. Reproduce
2. Understand root cause
3. Fix with verification
4. Document

## Related

- Skills: `dev/systematic-debugging/` (Superpowers)
- Agent: `dev/debugger.md`
- Template: `debug-report.template.md`
