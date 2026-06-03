# Claude Code + AstrAI Adapter

**Harness:** [Claude Code](https://docs.anthropic.com/en/docs/claude-code)
**AstrAI Compatibility:** Drop-in compatible

## How AstrAI Maps to Claude Code

### Root Dispatcher
`AGENTS.md` is the root dispatcher. Reference it from `CLAUDE.md`.

### Rules
Rules dispatcher: `.ai/rules/rules.md`. Categorized rules under `.ai/rules/<category>/`. Load by category.

### Skills
Categorized: `.ai/skills/dev/` (Superpowers), `.ai/skills/astrai/`, `.ai/skills/<role>/`.

### Agents
Categorized: `.ai/agents/dev/`, etc. Claude Code's sub-agent system maps naturally to AstrAI agent definitions.

### Protocols
Protocol dispatcher: `.ai/protocols/protocols.md`.

### Memory
`.ai/memory/` for durable project context.

## Quick Setup
1. Copy AstrAI's `.ai/` and `AGENTS.md` into your repo
2. Create/update `CLAUDE.md` referencing `AGENTS.md`
3. Claude Code reads CLAUDE.md → AGENTS.md → full flow

## Important
- Do not treat harness-specific files as source of truth
- See upstream Superpowers README for Claude Code-specific Superpowers install
