# Zed + AstrAI Adapter

**Harness:** [Zed](https://zed.dev)
**AstrAI Compatibility:** Drop-in compatible

## How AstrAI Maps to Zed

### Root Dispatcher
`AGENTS.md` is the root dispatcher.

### Rules
Rules dispatcher: `.ai/rules/rules.md`. Categorized.

### Skills
Categorized by role. Dev skills are Superpowers under `.ai/skills/dev/`.

### Agents
Categorized under `.ai/agents/<category>/`.

### Protocols
Protocol dispatcher: `.ai/protocols/protocols.md`.

## Quick Setup
1. Copy AstrAI's `.ai/` and `AGENTS.md` into your repo
2. Configure Zed assistant to reference `AGENTS.md`

## Important
- AGENTS.md remains the root dispatcher
- `.ai/rules/rules.md` is the rules dispatcher
- `.ai/protocols/protocols.md` is the protocol dispatcher
- Skills are categorized by role
- Development skills are Superpowers under `.ai/skills/dev/`
- Do not treat harness-specific files as source of truth
- See upstream Superpowers README for current harness-specific install instructions
