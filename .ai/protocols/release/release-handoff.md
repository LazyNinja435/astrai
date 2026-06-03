# Protocol: Release Handoff

## Purpose

Prepare release for deployment team handoff. Does NOT publish.

## Trigger

Release is approved and ready for handoff.

## Flow

```
Release Approved
    │
    ▼
[1] Release Notes → Skill: documentation/release-notes
    │
    ▼
[2] Handoff Doc → Skill: release/release-handoff
    │               Template: handoff.template.md
    │
    ▼
[3] Approval → User must explicitly approve publication
    │
    ▼
[4] Publication → ONLY with user approval
```

## Publication Authority

NEVER publish without explicit user approval.

## Related

- Skills: `release/`
- Templates: `handoff.template.md`
