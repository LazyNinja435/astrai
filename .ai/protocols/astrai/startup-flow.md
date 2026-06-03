# Protocol: Startup Flow

## Purpose

Define the mandatory startup sequence every AI agent must follow when entering this project.

## Trigger

Every new agent session. Always.

## Flow

```
Agent Starts
    │
    ▼
[1] Read AGENTS.md → Root dispatcher
    │
    ▼
[2] Read .ai/manifest.json → Discoverable index
    │
    ▼
[3] Read .ai/rules/rules.md → Rules dispatcher
    │
    ▼
[4] Load relevant rules → Only those matching current task
    │
    ▼
[5] Read .ai/protocols/protocols.md → Protocol dispatcher
    │
    ▼
[6] Load relevant protocols → Only those matching current task
    │
    ▼
[7] Match skills by trigger → Check each skill's "When to Use"
    │
    ▼
[8] Confirm readiness → Brief summary of loaded rules, protocols, matched skills
```

## Mandatory Steps

Steps 1-5 are mandatory. Steps 6-8 depend on the task.

## Roles

- **Agent**: Follows the flow, loads only what's relevant
- **Dispatchers**: Guide the agent to the right files

## Exit Criteria

Agent has loaded all mandatory dispatchers and confirmed readiness.

## Related

- Skills: `astrai/startup/SKILL.md`
- Rules: `project/source-of-truth.md`
