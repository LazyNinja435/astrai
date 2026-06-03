# Protocol: Release Readiness

## Purpose

Verify quality gates before release and prepare release documentation.

## Trigger

Release is being prepared.

## Flow

```
Release Candidate Ready
    │
    ▼
[1] Verify → All tests pass, build passes
    │
    ▼
[2] Quality Gates → Skill: release/release-readiness
    │                 Template: release-readiness.template.md
    │
    ▼
[3] Changelog → Skill: release/changelog-prep
    │
    ▼
[4] Documentation → Docs updated, migration guides ready
    │
    ▼
[5] Go/No-Go → Gate decision
    │
    ▼
[6] If Go → Skill: release/release-handoff
    │         DO NOT publish without explicit user approval
```

## Related

- Skills: `release/`
- Templates: `release-readiness.template.md`
