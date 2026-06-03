# GitHub Copilot + AstrAI Adapter

**Harness:** [GitHub Copilot](https://github.com/features/copilot)
**AstrAI Compatibility:** Drop-in compatible

## How AstrAI Maps to Copilot

### Root Dispatcher
`AGENTS.md` is the root dispatcher.

### Rules
Rules dispatcher: `.ai/rules/rules.md`. Categorized.

### Skills
Categorized by role. Dev skills are Superpowers under `.ai/skills/dev/`.

### Agents
Categorized: `.ai/agents/<category>/`.

### Protocols
Protocol dispatcher: `.ai/protocols/protocols.md`.

## Quick Setup
1. Copy AstrAI's `.ai/` and `AGENTS.md` into your repo
2. Create `.github/copilot-instructions.md` referencing `AGENTS.md`

## Important
- Do not treat harness-specific files as source of truth
- Copilot inline completions don't use AstrAI (code completion, not agent workflow)
- Copilot Chat and agent features can read AstrAI files
