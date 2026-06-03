# Protocol Dispatcher

> Do not load all protocols by default. Use this dispatcher to select only the protocol files relevant to the current task. Protocols orchestrate rules, skills, agents, and templates into multi-step flows.

## How to Use This Dispatcher

1. Identify the type of task (startup, dev, product, QA, review, release).
2. Load only the protocol files listed under the matching category.
3. Protocols should reference skills and agents by their exact paths.
4. Do not duplicate detailed skill workflows in protocols — reference them.

---

## Protocol Categories

### AstrAI Protocols (`.ai/protocols/astrai/`)
**When:** AstrAI-specific operations.

| File | Purpose |
|------|---------|
| `astrai/startup-flow.md` | Mandatory agent startup sequence |
| `astrai/memory-update-flow.md` | When and how to update memory |
| `astrai/new-project-bootstrap.md` | Setting up AstrAI in a project |

### Dev Protocols (`.ai/protocols/dev/`)
**When:** Development tasks. Reference Superpowers skills.

| File | Purpose |
|------|---------|
| `dev/plan-then-implement.md` | Plan before implementing |
| `dev/debug-then-fix.md` | Systematic debug workflow |
| `dev/tdd-flow.md` | Test-driven development flow |
| `dev/review-before-finish.md` | Review before declaring complete |

### Product Owner Protocols (`.ai/protocols/product-owner/`)
**When:** Product ownership workflows.

| File | Purpose |
|------|---------|
| `product-owner/requirement-to-story.md` | Requirements to user stories |
| `product-owner/backlog-refinement-flow.md` | Backlog grooming workflow |

### QA Protocols (`.ai/protocols/qa/`)
**When:** Quality assurance activities.

| File | Purpose |
|------|---------|
| `qa/test-strategy-flow.md` | Define and execute test strategy |
| `qa/test-case-design-flow.md` | Design test cases |
| `qa/defect-triage-flow.md` | Triage and analyze defects |
| `qa/automation-planning-flow.md` | Plan test automation |

### Review Protocols (`.ai/protocols/review/`)
**When:** Code review activities.

| File | Purpose |
|------|---------|
| `review/multi-agent-review.md` | Parallel review from multiple agents |
| `review/lightweight-review.md` | Quick single-reviewer review |

### Release Protocols (`.ai/protocols/release/`)
**When:** Release preparation.

| File | Purpose |
|------|---------|
| `release/release-readiness.md` | Verify release quality gates |
| `release/release-handoff.md` | Prepare release handoff |

---

## Forbidden

- Loading all protocols by default
- Duplicating skill workflows in protocols
- Ignoring protocols when their trigger conditions match
