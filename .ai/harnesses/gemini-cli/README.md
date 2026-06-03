# Gemini CLI + AstrAI Adapter

**Harness:** Gemini CLI (Google)
**AstrAI Compatibility:** Drop-in compatible

## How AstrAI Maps to Gemini CLI

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
2. Include AstrAI reference in Gemini CLI configuration

## Important
- Do not treat harness-specific files as source of truth
