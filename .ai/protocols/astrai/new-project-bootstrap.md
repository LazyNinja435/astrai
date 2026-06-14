# Protocol: New Project Bootstrap

## Purpose

Orchestrate AstrAI setup in a new or existing repository.

## Trigger

- Setting up AstrAI for the first time
- User asks "set up AstrAI" or "bootstrap .ai/"

## Flow

```
Bootstrap Start
    │
    ▼
[1] Verify .ai/ and AGENTS.md exist
    │
    ▼
[2] Populate .ai/memory/project.md → Project identity + tech stack
    │
    ▼
[3] Populate .ai/memory/constraints.md → Project-specific constraints
    │
    ▼
[3b] Reset event-sourced memory → empty .ai/memory/events/ and
     .ai/memory/snapshots/ (keep .gitkeep); remove template decision
     records from .ai/memory/decisions/ that don't apply (there is no
     decisions index to reset); ensure sandbox/ is gitignored
    │
    ▼
[4] Curate rules → Remove unused, customize project-specific
    │
    ▼
[5] Curate skills → Keep relevant, remove unused
    │
    ▼
[6] Curate agents → Keep relevant, remove unused
    │
    ▼
[7] Curate protocols → Keep relevant, remove unused
    │
    ▼
[8] Read harness adapters → For tools the team uses
    │
    ▼
[9] Update manifest.json → Reflect customizations
    │
    ▼
[10] Validate → All references resolve, no broken links
```

## Related

- Skills: `astrai/project-bootstrap/SKILL.md`
