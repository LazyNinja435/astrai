# Rules Dispatcher

> Do not load all rule files by default. Use this dispatcher to select only the rule files relevant to the current task.

## How to Use This Dispatcher

1. Identify the domain of your current task (project setup, git, safety, coding, documentation, artifacts, security).
2. Load only the rule files listed under that domain below.
3. Rules are **laws**, not guidelines. Follow them strictly.
4. If a task spans multiple domains, load rules from each relevant domain.
5. Safety rules always apply when user data, external content, secrets, or destructive operations are involved.

---

## Rule Categories

### Project Rules (`.ai/rules/project/`)
**When:** Always — applies to any work in this project.

| File | Load When |
|------|-----------|
| `project/project-scope.md` | Always. Defines what is in and out of scope. |
| `project/source-of-truth.md` | Always. Defines `.ai/` as source of truth for AI instructions. |
| `project/memory-boundaries.md` | When reading or writing `.ai/memory/`. |
| `project/memory-events.md` | When writing memory events/snapshots, running `scripts/memory/fold.ts`, or recording per-session learnings. |

### Git Rules (`.ai/rules/git/`)
**When:** Performing any git operation.

| File | Load When |
|------|-----------|
| `git/git-basics.md` | Any git operation. |
| `git/branching.md` | Creating or switching branches. |
| `git/commits.md` | Committing changes. |
| `git/destructive-actions.md` | Force pushes, rebases, deletions. |

### Safety Rules (`.ai/rules/safety/`)
**When:** User data, external content, secrets, or destructive operations are involved.

| File | Load When |
|------|-----------|
| `safety/safety-basics.md` | Always when any safety concern exists. |
| `safety/secrets-and-credentials.md` | Handling auth, tokens, API keys, env files. |
| `safety/user-data.md` | Handling PII, user input, stored user data. |
| `safety/external-content.md` | Fetching URLs, running external scripts, installing packages. |

### Coding Rules (`.ai/rules/coding/`)
**When:** Writing or modifying code.

| File | Load When |
|------|-----------|
| `coding/coding-basics.md` | Any code change. |
| `coding/dependency-changes.md` | Adding, removing, or updating dependencies. |
| `coding/refactoring.md` | Refactoring existing code. |
| `coding/testing-expectations.md` | Writing or modifying tests. |

### Documentation Rules (`.ai/rules/documentation/`)
**When:** Writing or updating documentation.

| File | Load When |
|------|-----------|
| `documentation/documentation-basics.md` | Any documentation change. |
| `documentation/readme-updates.md` | Updating README files. |
| `documentation/decision-records.md` | Recording architectural decisions. |

### Artifact Rules (`.ai/rules/artifacts/`)
**When:** Generating structured output (plans, reviews, reports, handoffs).

| File | Load When |
|------|-----------|
| `artifacts/artifact-basics.md` | Any generated artifact. |
| `artifacts/generated-files.md` | Creating new files as output. |
| `artifacts/reports-and-handoffs.md` | Producing reports or handoff documents. |

### Security Rules (`.ai/rules/security/`)
**When:** Reviewing code for security, handling dependencies, processing input.

| File | Load When |
|------|-----------|
| `security/security-review.md` | Security-focused code review. |
| `security/dependency-risk.md` | Adding or auditing dependencies. |
| `security/injection-risk.md` | Processing user input, database queries, shell commands. |

---

## Precedence

1. Safety rules override all other rules.
2. Project rules override coding and documentation rules.
3. Coding rules apply to all code changes.
4. Git rules apply to all git operations.
5. If rules conflict, the higher-precedence rule wins.

---

## Forbidden

- Loading all rule files "just in case." Only load what applies.
- Creating new rules without updating this dispatcher.
- Ignoring a rule because it's "inconvenient."
- Treating rules as optional. Rules are laws.
