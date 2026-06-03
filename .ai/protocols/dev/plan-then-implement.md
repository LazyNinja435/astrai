# Protocol: Plan Then Implement

## Purpose

Orchestrate the full implementation lifecycle: intake → plan → implement → review → finish.

## Trigger

Any non-trivial implementation task.

## Flow

```
Task Received
    │
    ▼
[1] Intake → Skill: astrai/startup, astrai/skill-bridge
    │
    ▼
[2] Plan → Skill: dev/writing-plans (Superpowers)
    │         Agent: dev/architect (if needed)
    │         Template: plan.template.md
    │
    ▼
[3] Approve → User reviews plan
    │
    ▼
[4] Implement → Skill: dev/executing-plans (Superpowers)
    │             Agent: dev/implementer
    │
    ▼
[5] Verify → Build, typecheck, tests
    │
    ▼
[6] Review → Skill: dev/requesting-code-review (Superpowers)
    │          Agent: dev/reviewer
    │
    ▼
[7] Finish → Skill: dev/verification-before-completion (Superpowers)
    │          Skill: dev/finishing-a-development-branch (Superpowers)
```

## Mandatory Steps

1. Plan creation and approval
2. Implementation with verification
3. Review
4. Verification before completion

## Related

- Skills: `dev/writing-plans/`, `dev/executing-plans/`, `dev/requesting-code-review/`, `dev/finishing-a-development-branch/` (Superpowers)
- Agents: `dev/architect.md`, `dev/implementer.md`, `dev/reviewer.md`
