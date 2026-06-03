# Cursor + AstrAI Adapter

**Harness:** [Cursor](https://cursor.com)
**AstrAI Compatibility:** Drop-in compatible

## How AstrAI Maps to Cursor

### Root Dispatcher
`AGENTS.md` is the root dispatcher. Point Cursor to it via `.cursorrules` or `.cursor/rules/`.

### Rules
Rules dispatcher: `.ai/rules/rules.md`. Rules are categorized under `.ai/rules/<category>/`. Load rules by category — not all at once.

### Skills
Skills are categorized by role:
- `.ai/skills/dev/` — Superpowers dev skills (copied directly from upstream)
- `.ai/skills/astrai/` — AstrAI-specific operational skills
- `.ai/skills/product-owner/`, `.ai/skills/qa/`, etc.

### Agents
Agents are categorized: `.ai/agents/dev/`, `.ai/agents/security/`, etc. Delegate only when specialization is needed.

### Protocols
Protocol dispatcher: `.ai/protocols/protocols.md`. Protocols orchestrate skills, agents, and templates.

### Memory
`.ai/memory/` stores durable project context.

## Quick Setup
1. Copy AstrAI's `.ai/` and `AGENTS.md` into your repo
2. Create `.cursorrules` pointing to `AGENTS.md`
3. Cursor reads AGENTS.md → manifest → dispatchers → only what's relevant

## Important
- AGENTS.md remains the root dispatcher
- `.ai/rules/rules.md` is the rules dispatcher
- `.ai/protocols/protocols.md` is the protocol dispatcher
- Skills are categorized by role
- Development skills are Superpowers under `.ai/skills/dev/`
- Do not treat Cursor-specific files as source of truth
- See upstream Superpowers README for current Cursor-specific install instructions
