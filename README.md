# AstrAI

**The astra for intelligence.**

AstrAI is a harness-agnostic AI project base that gives any repository a portable operating layer for AI agents. It organizes rules, skills, agents, protocols, templates, plans, and event-sourced memory under `.ai/` with categorized role/domain folders so different AI coding tools can work from the same source of truth.

---

## Why Categorized AI Structure Matters

Without structure, AI agents either load everything (context bloat) or load nothing (uninformed). Categorized folders with dispatchers solve this:

- **Dispatchers before details.** Agents read dispatcher files first, then load only the exact files they need.
- **Role-based categorization.** Skills, agents, and protocols are grouped by domain (dev, product-owner, qa, security, release).
- **Superpowers for dev.** Development workflows use Superpowers skills copied directly from upstream under `.ai/skills/dev/`.

---

## Root Dispatcher: AGENTS.md

`AGENTS.md` is the first file every AI agent must read. It describes the mandatory startup flow and directs agents to the right dispatchers.

---

## Rules Dispatcher: `.ai/rules/rules.md`

Rules are laws. `.ai/rules/rules.md` helps agents select only the rules relevant to their task:

| Category | Path | Purpose |
|----------|------|---------|
| Project | `.ai/rules/project/` | Scope, source of truth, memory boundaries, memory events |
| Git | `.ai/rules/git/` | Commits, branching, destructive actions |
| Safety | `.ai/rules/safety/` | Secrets, user data, external content |
| Coding | `.ai/rules/coding/` | Basics, dependencies, refactoring, testing |
| Documentation | `.ai/rules/documentation/` | Docs, READMEs, decision records |
| Artifacts | `.ai/rules/artifacts/` | Generated files, reports, handoffs |
| Security | `.ai/rules/security/` | Security review, dependency risk, injection risk |

---

## Protocol Dispatcher: `.ai/protocols/protocols.md`

Protocols orchestrate skills, agents, and templates into multi-step flows:

| Category | Path | Purpose |
|----------|------|---------|
| AstrAI | `.ai/protocols/astrai/` | Startup, memory updates, project bootstrap, huddle mode |
| Dev | `.ai/protocols/dev/` | Plan-then-implement, debug-then-fix, TDD, review-before-finish |
| Product Owner | `.ai/protocols/product-owner/` | Requirement-to-story, backlog refinement |
| QA | `.ai/protocols/qa/` | Test strategy, test case design, defect triage |
| Review | `.ai/protocols/review/` | Multi-agent review, lightweight review |
| Release | `.ai/protocols/release/` | Release readiness, release handoff |

---

## Skills by Role/Domain

| Category | Path | Source |
|----------|------|--------|
| Dev | `.ai/skills/dev/` | Superpowers (upstream) |
| AstrAI | `.ai/skills/astrai/` | AstrAI-authored (startup, bootstrap, memory-update, memory-harvest, huddle, …) |
| Product Owner | `.ai/skills/product-owner/` | AstrAI-authored |
| QA | `.ai/skills/qa/` | AstrAI-authored |
| Documentation | `.ai/skills/documentation/` | AstrAI-authored |
| Security | `.ai/skills/security/` | AstrAI-authored |
| Release | `.ai/skills/release/` | AstrAI-authored |

### Superpowers Dev Skills

Development skills under `.ai/skills/dev/` are copied directly from [Superpowers](https://github.com/obra/superpowers) by Jesse Vincent. AstrAI does **not** rewrite or paraphrase them. AstrAI routes dev tasks to Superpowers skills via the `skill-bridge` skill.

---

## Agents by Role/Domain

| Category | Path | Purpose |
|----------|------|---------|
| AstrAI | `.ai/agents/astrai/` | Dispatcher, memory curator, bootstrapper, huddle architect |
| Dev | `.ai/agents/dev/` | Architect, implementer, reviewer, debugger |
| Product Owner | `.ai/agents/product-owner/` | Product owner, requirements analyst, backlog refiner |
| QA | `.ai/agents/qa/` | QA architect, test designer, automation engineer, defect analyst |
| Documentation | `.ai/agents/documentation/` | Technical writer, decision recorder |
| Security | `.ai/agents/security/` | Security reviewer |
| Release | `.ai/agents/release/` | Release manager |

---

## Superpowers Integration and Attribution

- **Upstream:** https://github.com/obra/superpowers
- **Skills source:** https://github.com/obra/superpowers/tree/main/skills
- **License:** MIT (see `.ai/vendor/superpowers/LICENSE`)
- **Attribution:** See `.ai/NOTICE.md`
- **Integration docs:** See `.ai/integrations/superpowers.md`

---

## Folder Tree

```
.ai/
  manifest.json              ← Discoverable index
  NOTICE.md                  ← Attribution and licenses
  rules/
    rules.md                 ← Rules dispatcher
    project/                 (4 files)
    git/                     (4 files)
    safety/                  (4 files)
    coding/                  (4 files)
    documentation/           (3 files)
    artifacts/               (3 files)
    security/                (3 files)
  skills/
    dev/                     ← Superpowers skills (14 skills)
    astrai/                  (8 skills)
    product-owner/           (5 skills)
    qa/                      (6 skills)
    documentation/           (3 skills)
    security/                (3 skills)
    release/                 (3 skills)
  agents/
    astrai/                  (4 agents + README)
    dev/                     (4 agents + README)
    product-owner/           (3 agents + README)
    qa/                      (4 agents + README)
    documentation/           (2 agents + README)
    security/                (1 agent + README)
    release/                 (1 agent + README)
  protocols/
    protocols.md             ← Protocol dispatcher
    astrai/                  (4 protocols)
    dev/                     (4 protocols)
    product-owner/           (2 protocols)
    qa/                      (4 protocols)
    review/                  (2 protocols)
    release/                 (2 protocols)
  templates/                 (16 templates)
  plans/
    README.md                ← Plan lifecycle overview
    new/                     ← Created, not yet started
    wip/                     ← Work in progress
    completed/               ← Finished and verified
  memory/
    project.md               ← Curated: project overview
    constraints.md           ← Curated: hard constraints
    glossary.md              ← Curated: terminology
    open-questions.md        ← Curated: unresolved questions
    decisions/               ← Write-once decision records (no index — glob, newest first)
    events/<user>/           ← One immutable event file per work session (committed)
    snapshots/<user>.json    ← Compacted per-user aggregates (owner-only, via fold --compact)
    huddle/                  ← Huddle mode conversation memory
  integrations/              (Superpowers integration doc)
  vendor/superpowers/        (LICENSE + README)
  harnesses/                 (7 adapters: cursor, claude-code, codex, zed, copilot, gemini-cli, opencode)
  examples/                  (5 example walkthroughs)

scripts/
  memory/fold.ts             ← Optional: deterministic fold of events+snapshots (Node builtins only)
  memory/fold.test.ts        ← Fixture test (npx tsx scripts/memory/fold.test.ts)

sandbox/memory/              ← Gitignored, local-only (knowledge.json, KNOWLEDGE.md — from fold.ts)
```

---

## Quick Reference

| What | Where | When |
|------|-------|------|
| Root dispatcher | `AGENTS.md` | Always, first |
| Manifest | `.ai/manifest.json` | After AGENTS.md |
| Rules dispatcher | `.ai/rules/rules.md` | After manifest |
| Protocol dispatcher | `.ai/protocols/protocols.md` | After rules |
| Dev skills | `.ai/skills/dev/` | Dev tasks |
| AstrAI skills | `.ai/skills/astrai/` | AstrAI operations |
| Role skills | `.ai/skills/<category>/` | Domain tasks |
| Dev agents | `.ai/agents/dev/` | Dev delegation |
| Templates | `.ai/templates/` | Structured output |
| Plans | `.ai/plans/{new,wip,completed}/` | Track multi-step work; update after each step |
| Memory | `.ai/memory/` | Durable context (decision records, curated files, events/snapshots) |
| Memory events | `.ai/memory/events/<user>/` | One immutable event per work session (`astrai/memory-harvest`) |
| Fold script | `scripts/memory/fold.ts` | Derive local team view into `sandbox/memory/` |
| Harness info | `.ai/harnesses/` | Informational only |

---

## Team Memory (Event-Sourced)

Shared, hand-edited memory files conflict as soon as two contributors work concurrently. AstrAI's memory model removes that failure mode: **no committed file ever has two writers; all aggregate state is computed locally at read time, never stored.**

- **Curated context** (`project.md`, `constraints.md`, `glossary.md`, `open-questions.md`) is deliberate, low-churn reference material.
- **Decision records** are write-once files in `.ai/memory/decisions/` — there is no index; discover by globbing, newest first.
- **Per-session learnings** are harvested as ONE immutable event file per session (`.ai/memory/events/<user>/<date>-<task-slug>.json`) via the `astrai/memory-harvest` skill. Events are never edited.
- **The fold** (`npx tsx scripts/memory/fold.ts`) derives the team view locally into gitignored `sandbox/memory/` — deduped entries with computed `seenCount`, contributor lists, and `autoAnswer`/`systemic` flags. The script is optional tooling (Node builtins only, the sanctioned exception to "no dependencies"); the plain-JSON format works without it.
- **Compaction** (`fold.ts --compact --user <name>`) folds a user's old events into their own snapshot; **graduation** promotes persistently systemic knowledge into rules/constraints via decision records, keeping memory small.

Invariants live in `.ai/rules/project/memory-events.md`. The full model is also indexed in `.ai/manifest.json` under `memory_model`.

---

## How Plans Work

Multi-step work is tracked through a three-folder lifecycle under `.ai/plans/`:

1. **Create** in `.ai/plans/new/` using `.ai/templates/plan.template.md` (`YYYY-MM-DD-short-task-title.md`).
2. **Start** — move to `.ai/plans/wip/` and set `Status` to `wip`.
3. **Track** — after every completed step, update the plan's Progress Tracking section and `Last updated`.
4. **Finish** — when all steps are verified, move to `.ai/plans/completed/` and set `Status` to `completed`.

A plan lives in exactly one folder at a time. See `.ai/plans/README.md` for the lifecycle table.

---

## How to Use AstrAI in a New Project

1. Copy `.ai/`, `AGENTS.md`, and `scripts/` into your repo root
2. Customize `.ai/memory/project.md` with your project's specifics
3. Customize `.ai/memory/constraints.md` with your project's constraints
4. Curate rules, skills, agents, and protocols — keep what fits, remove what doesn't
5. Update `.ai/manifest.json`
6. Read harness adapters for the tools your team uses
7. See `.ai/protocols/astrai/new-project-bootstrap.md` for the full guided setup
8. After substantive sessions, harvest learnings with `astrai/memory-harvest`; run `npx tsx scripts/memory/fold.ts` locally when you want a derived team view

---

## How to Customize

### Add a New Rule
1. Create the rule file in the appropriate `.ai/rules/<category>/` folder
2. Update `.ai/rules/rules.md` to include it
3. Update `.ai/manifest.json`

### Add a New Skill
1. Use `.ai/templates/skill.template.md` for format
2. Create `SKILL.md` in the appropriate `.ai/skills/<category>/<name>/` folder
3. Add a `README.md` to the category if adding a new category
4. Update `.ai/manifest.json`

### Add a New Agent
1. Use `.ai/templates/agent.template.md` for format
2. Create the agent file in the appropriate `.ai/agents/<category>/` folder
3. Update the category `README.md`
4. Update `.ai/manifest.json`

---

## Design Principles

- **Dispatchers before details.** Agents read dispatchers first, then load only what's needed.
- **Harness agnostic.** Works with Cursor, Claude Code, Codex, Zed, Copilot, Gemini CLI, OpenCode, and future tools.
- **Source-of-truth under `.ai/`.** One directory, one truth.
- **Rules are laws.** Not guidelines, not suggestions.
- **Skills are triggered by conditions.** Not invoked by commands.
- **Agents are narrow roles.** Do one thing well.
- **Protocols orchestrate flows.** Compose skills, agents, and templates.
- **Templates standardize outputs.** Consistency across agents and tools.
- **Memory stores durable project context.** Not session state, not secrets.
- **Plans are the source of truth for multi-step work.** One folder reflects status; progress is updated after every step.
- **No committed memory file has two writers.** Per-session learnings are immutable events; aggregates are computed locally at read time, never stored.
- **No tool-specific lock-in.** No hidden config files.
- **Superpowers for dev.** Development workflows use upstream Superpowers skills directly.
- **Human-readable first.** Anyone can open and understand any file.

---

## License

MIT License — see [LICENSE](LICENSE) for details. AstrAI-authored files are MIT. Superpowers-derived files remain under upstream MIT license (see `.ai/NOTICE.md` and `.ai/vendor/superpowers/LICENSE`).
