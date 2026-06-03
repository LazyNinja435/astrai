# OpenCode + AstrAI Adapter

**Harness:** OpenCode
**AstrAI Compatibility:** Drop-in compatible

## How AstrAI Maps to OpenCode

### Root Dispatcher
`AGENTS.md` is the root dispatcher.

### Rules
Rules dispatcher: `.ai/rules/rules.md`. Categorized under `.ai/rules/<category>/`. Load by category.

### Skills
Categorized by role. Dev skills are Superpowers under `.ai/skills/dev/`.

### Agents
Categorized: `.ai/agents/<category>/`.

### Protocols
Protocol dispatcher: `.ai/protocols/protocols.md`.

## Quick Setup
1. Copy AstrAI's `.ai/` and `AGENTS.md` into your repo
2. Configure OpenCode to reference `AGENTS.md` as the root instruction file

## Important
- AGENTS.md remains the root dispatcher
- `.ai/rules/rules.md` is the rules dispatcher
- `.ai/protocols/protocols.md` is the protocol dispatcher
- Skills are categorized by role
- Development skills are Superpowers under `.ai/skills/dev/`
- Do not treat harness-specific files as source of truth
- See upstream Superpowers README for current harness-specific install instructions
