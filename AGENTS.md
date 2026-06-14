# AstrAI — AGENTS.md

**The astra for intelligence.** This is the root dispatcher for all AI agents entering this project.

## Mandatory Startup Flow

Every AI agent must follow this sequence:

1. **Read `AGENTS.md`** (you are here)
2. **Read `.ai/manifest.json`** — discoverable index of everything in `.ai/`
3. **Read `.ai/rules/rules.md`** — rules dispatcher
4. **Load only the rule files that apply** to the current task from `.ai/rules/<category>/`
5. **Read `.ai/protocols/protocols.md`** — protocol dispatcher
6. **Load only the protocol files that apply** to the current task from `.ai/protocols/<category>/`
7. **Identify relevant skills** by their "When to Use" triggers from `.ai/skills/<category>/`
8. **For development workflows**, prefer Superpowers skills under `.ai/skills/dev/`
9. **Delegate to agents** from `.ai/agents/<category>/` only when specialization is needed
10. **Use templates** from `.ai/templates/` for structured output
11. **Create plans** in `.ai/plans/new/` using `.ai/templates/plan.template.md` (see "How Plans Work")
12. **Update memory** in `.ai/memory/` only for durable project context — curated context (decision records in `decisions/`, constraints, glossary, open questions) via `astrai/memory-update`; per-session learnings as ONE immutable event file via `astrai/memory-harvest` (never edit existing events/snapshots; see `.ai/rules/project/memory-events.md`)

---

## Key Principles

### Dispatchers Before Details
Do not load all rule files by default. Do not load all skill files by default. Do not load all protocol files by default. Do not load all agent files by default. Dispatchers exist to prevent context bloat. Prefer exact file paths from dispatcher documents.

### Source of Truth
`.ai/` is the source of truth for all AI operating instructions. `.ai/rules/rules.md` is the rules dispatcher. `.ai/protocols/protocols.md` is the protocol dispatcher. `AGENTS.md` is the root dispatcher.

### Skill Categories
- **`.ai/skills/dev/`** — Superpowers skills (copied directly from upstream, development workflows)
- **`.ai/skills/astrai/`** — AstrAI-specific skills (startup, bootstrapping, dispatcher maintenance)
- **`.ai/skills/product-owner/`** — Product ownership skills
- **`.ai/skills/qa/`** — Quality assurance skills
- **`.ai/skills/documentation/`** — Documentation skills
- **`.ai/skills/security/`** — Security review skills
- **`.ai/skills/release/`** — Release management skills

### Agent Categories
- **`.ai/agents/astrai/`** — AstrAI management agents
- **`.ai/agents/dev/`** — Development agents
- **`.ai/agents/product-owner/`** — Product ownership agents
- **`.ai/agents/qa/`** — Quality assurance agents
- **`.ai/agents/documentation/`** — Documentation agents
- **`.ai/agents/security/`** — Security agents
- **`.ai/agents/release/`** — Release agents

### Superpowers Dev Skills
Superpowers skills live under `.ai/skills/dev/`. For development workflows, prefer these skills. Do not recreate or paraphrase Superpowers skills. Do not create AstrAI-authored duplicates.

---

## Precedence Order

When instructions conflict, follow this order:

1. **User request** (explicit user instruction)
2. **Safety constraints** (`.ai/rules/safety/`)
3. **AstrAI project dispatchers** (this file, `.ai/rules/rules.md`, `.ai/protocols/protocols.md`)
4. **Specific loaded AstrAI rules** (from `.ai/rules/<category>/`)
5. **Superpowers dev skills** (`.ai/skills/dev/`)
6. **Role-specific skills** (`.ai/skills/<category>/`)
7. **Protocols** (`.ai/protocols/<category>/`)
8. **Templates** (`.ai/templates/`)
9. **General model behavior**

---

## What Is Forbidden

- Do not load every `.ai/` file just because it exists. Use dispatchers.
- Do not recreate Superpowers skills locally.
- Do not paraphrase Superpowers skills.
- Do not ignore Superpowers dev skills when a relevant one exists under `.ai/skills/dev/`.
- Do not treat harness-specific adapter docs as source of truth.
- Do not run destructive commands without explicit user approval.
- Do not commit secrets or credentials.
- Do not modify `.ai/` structure without understanding the dispatcher system.

---

## How Delegation Works

1. Check if the task can be completed directly. Only delegate when specialization adds value.
2. Load the agent definition from `.ai/agents/<category>/<agent>.md`
3. Respect its Allowed/Not Allowed boundaries
4. Provide the inputs it expects
5. Validate its output before integrating

---

## How Plans Work

Plans are tracked through a three-folder lifecycle under `.ai/plans/`:

1. **Create.** Write every new plan in `.ai/plans/new/` using `.ai/templates/plan.template.md`. Name it `YYYY-MM-DD-short-task-title.md`.
2. **Start.** When you begin executing a plan, **move the file to `.ai/plans/wip/`** and set its `Status` to `wip`.
3. **Track.** **After every step is completed, update the plan's Progress Tracking section** (mark the step done, set the date, record the verification result) and update `Last updated`. The plan file is the single source of truth for progress.
4. **Finish.** When all steps are complete and verified, **move the file to `.ai/plans/completed/`** and set its `Status` to `completed`.

A plan must live in exactly one of `new/`, `wip/`, or `completed/` at a time — its folder reflects its current state. See `.ai/plans/README.md` for the lifecycle table.

---

## How to Finish a Task

1. Verify all work against relevant rules
2. Run the `verification-before-completion` skill (Superpowers)
3. Run the `finishing-a-development-branch` skill if applicable (Superpowers)
4. Update `.ai/memory/` only for durable decisions (write-once records in `.ai/memory/decisions/`)
5. After a substantive session, harvest learnings via the `astrai/memory-harvest` skill (one immutable event file)
6. Provide a concise summary of what was done

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
| Harness info | `.ai/harnesses/` | Informational only |
