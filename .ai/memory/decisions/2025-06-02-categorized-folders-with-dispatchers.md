# Decision Record: Use categorized folders with dispatchers instead of flat structure

**Date:** 2025-06-02
**Status:** Accepted

---

## Decision

Reorganize `.ai/` into categorized folders with dispatcher files; agents read dispatchers first, then load only what applies.

## Context

The original AstrAI structure used flat directories (e.g., `.ai/rules/safety-rules.md`, `.ai/skills/planning/SKILL.md`). As the project grew, flat organization made it impossible to tell which rules/skills/agents applied to which domain. Agents tended to load everything or nothing.

## Structure

- `.ai/rules/<category>/` with `.ai/rules/rules.md` dispatcher
- `.ai/skills/<domain>/` (dev, astrai, product-owner, qa, documentation, security, release)
- `.ai/agents/<category>/` with category READMEs
- `.ai/protocols/<category>/` with `.ai/protocols/protocols.md` dispatcher
- "Dispatchers before details" — agents read dispatchers first, then load only what applies

## Rationale

- Prevents context bloat — agents load only relevant files
- Clear domain boundaries — dev skills (Superpowers) vs AstrAI ops vs product vs QA
- Dispatchers provide a single entry point per concern
- Scales to many more rules/skills without overwhelming agents

## Consequences

- Old flat-structure decisions are superseded
- Cross-references in examples and docs must use new paths
- New contributors need to understand the dispatcher pattern
