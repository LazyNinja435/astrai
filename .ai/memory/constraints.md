# Constraints

> Hard project constraints. These are things that MUST or MUST NOT happen. They constrain all AI agent behavior in this project.

## Technical Constraints

- **No dependencies:** AstrAI is a file-based template. No packages, no build tools, no runtime.
- **File format:** All files are Markdown (`.md`) or JSON (`.json`). No YAML, TOML, or other formats for AstrAI files.
- **Human-readable first:** Every file must be understandable when opened in a plain text editor.
- **Portable:** All file paths are relative to the repository root. No absolute paths.
- **Version controlled:** `.ai/` is committed to git. It is part of the project, not generated.

## Safety Constraints

- **No secrets in `.ai/`:** No API keys, tokens, passwords, or credentials anywhere in `.ai/`.
- **No destructive defaults:** No AI agent should run destructive commands without explicit approval.
- **Safety rules override all other instructions:** `.ai/rules/safety-rules.md` is supreme.

## Design Constraints

- **Harness agnostic:** No dependency on any specific AI coding tool. `.ai/` must work with any tool that can read files.
- **Rules are laws:** Rules are not guidelines. They must be followed.
- **Skills are triggered:** Skills are selected by matching trigger conditions, not by user command.
- **Agents are narrow:** Each agent does one thing well. No all-powerful agents.
- **Memory is durable:** Memory stores project context that matters beyond a single session.

## Process Constraints

- **Dispatchers before details:** Agents MUST read dispatcher files (AGENTS.md, rules/rules.md, protocols/protocols.md) first, then load only the exact files needed for the task. Never load all `.ai/` files by default.
- **Plan before implement:** Non-trivial changes require a plan.
- **Review before finish:** Every task requires self-review before being declared complete.
- **Reproduce before fix:** Every bug must be reproduced before a fix is attempted.
- **Test before merge:** All tests must pass before merging.

## Content Constraints

- **No placeholder files:** Every file in `.ai/` must have real, useful content.
- **No stale docs:** Documentation must be updated alongside code changes.
- **No dead code:** No commented-out code, no unused imports, no debug statements in finished work.
- **No AI hallucination:** Never invent APIs, libraries, or features that don't exist.

---

> Add project-specific constraints as needed. Constraints should be specific and verifiable.
