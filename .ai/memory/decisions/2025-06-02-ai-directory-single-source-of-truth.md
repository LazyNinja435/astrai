# Decision Record: Use `.ai/` as the single source of truth for AI instructions

**Date:** 2025-06-02
**Status:** Accepted

---

## Decision

All AI operating instructions live under `.ai/` with `AGENTS.md` as the root dispatcher. No tool-specific config files are required.

## Context

Multiple AI coding tools each have their own configuration format. This fragments project intelligence across tool-specific configs.

## Rationale

- Single source of truth for all AI agents regardless of tool
- Human-readable Markdown and JSON
- Harness-agnostic: works with any AI coding tool

## Consequences

- Each harness must be configured to point to `.ai/`
- Tool-specific features not directly usable through AstrAI's generic interface
