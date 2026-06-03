# Codex CLI + AstrAI Adapter

**Harness:** [Codex CLI](https://github.com/openai/codex)
**AstrAI Compatibility:** Drop-in compatible

## How AstrAI Maps to Codex CLI

### Root Dispatcher
`AGENTS.md` is the root dispatcher.

### Rules
Rules dispatcher: `.ai/rules/rules.md`. Categorized under `.ai/rules/<category>/`.

### Skills
Categorized by role: `.ai/skills/dev/` (Superpowers), `.ai/skills/astrai/`, etc.

### Agents
Categorized: `.ai/agents/<category>/`.

### Protocols
Protocol dispatcher: `.ai/protocols/protocols.md`.

## Quick Setup
1. Copy AstrAI's `.ai/` and `AGENTS.md` into your repo
2. Configure Codex to load `AGENTS.md` as its primary instruction file

## Important
- Do not treat harness-specific files as source of truth
- See upstream Superpowers README for harness-specific installation
