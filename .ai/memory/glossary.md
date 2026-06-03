# Glossary

> Project-specific terminology, acronyms, and domain concepts. Add terms as they become project-relevant.

## AstrAI Core Concepts

| Term | Definition |
|------|------------|
| **AstrAI** | The harness-agnostic AI project base. "The astra for intelligence." |
| **AGENTS.md** | Root dispatcher file. The first file any AI agent should read. |
| **.ai/** | The `.ai` directory — source of truth for all AI operating instructions. |
| **Manifest** | `.ai/manifest.json` — discoverable index of everything in `.ai/`. |
| **Dispatcher** | A file that maps domain/category to exact file paths. Agents read dispatchers first, then load only relevant files. |
| **Dispatchers Before Details** | Core principle: agents read dispatcher files before loading individual rule/skill/protocol files. Prevents context bloat. |
| **Rule** | A law the AI must follow. Categorized under `.ai/rules/<category>/`. |
| **Rules Dispatcher** | `.ai/rules/rules.md` — maps task types to rule categories and file paths. |
| **Skill** | A reusable workflow with trigger conditions. Categorized under `.ai/skills/<domain>/`. |
| **Agent** | A narrow, specialized role definition. Categorized under `.ai/agents/<category>/`. |
| **Protocol** | A multi-step orchestration flow. Dispatched via `.ai/protocols/protocols.md`. |
| **Template** | A standardized output format in `.ai/templates/`. |
| **Memory** | Durable project context in `.ai/memory/`. Not session state. |
| **Harness** | An AI coding tool (Cursor, Claude Code, Codex, etc.). |
| **Harness Adapter** | Guidance for mapping AstrAI concepts to a specific harness. |
| **Superpowers** | Upstream dev skills by Jesse Vincent, copied into `.ai/skills/dev/`. |
| **Skill Bridge** | AstrAI skill that routes dev tasks to the appropriate Superpowers skill. |

## Workflow Concepts

| Term | Definition |
|------|------------|
| **Task Intake** | The process of capturing, clarifying, and scoping a new request. |
| **Brainstorming** | Generating and evaluating solution alternatives before committing. |
| **Planning** | Creating a structured step-by-step implementation plan. |
| **Implementation** | Executing planned steps with minimal, verified code changes. |
| **TDD** | Test-Driven Development: write failing test → make it pass → refactor. |
| **Code Review** | Reviewing code for correctness, safety, style, and rule compliance. |
| **Branch Finish** | Cleaning up and preparing a branch for merge. |
| **Systematic Debugging** | Methodical bug investigation: reproduce → isolate → understand → fix. |
| **Multi-Agent Review** | Coordinating parallel reviews from specialized agents. |

## Harness Names

| Term | Definition |
|------|------------|
| **Cursor** | AI code editor by Anysphere. |
| **Claude Code** | Anthropic's CLI-based coding agent. |
| **Codex CLI** | OpenAI's CLI coding agent. |
| **Zed** | Code editor with AI assistant features. |
| **GitHub Copilot** | AI coding assistant integrated into editors. |
| **Gemini CLI** | Google's Gemini-based CLI coding tool. |

---

> Add project-specific terms as your project grows. Keep definitions concise and accurate.
