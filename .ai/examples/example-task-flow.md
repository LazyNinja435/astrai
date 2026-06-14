# Example: Standard Task Flow

This example walks through how an AI agent processes a typical feature request using AstrAI's categorized structure.

---

## Scenario

**User says:** "Add rate limiting to the API endpoints."

**Project:** A Node.js Express API

---

## Agent Execution Flow

### Step 1: Read AGENTS.md

The agent starts by reading `AGENTS.md`. It learns:
- `.ai/` is the source of truth
- It must follow the mandatory startup flow
- Dispatchers before details: read dispatchers, then load only what applies

### Step 2: Read .ai/manifest.json

The agent loads the manifest and discovers:
- Rules dispatcher: `.ai/rules/rules.md`
- Protocol dispatcher: `.ai/protocols/protocols.md`
- Relevant skill categories: `dev` (Superpowers), `astrai`
- Available agents: `dev/architect`, `dev/implementer`, `dev/reviewer`

### Step 3: Read Dispatchers and Load Rules

The agent reads `.ai/rules/rules.md` and loads only the applicable rules:
- `.ai/rules/safety/safety-basics.md` (always)
- `.ai/rules/project/project-scope.md` (always)
- `.ai/rules/project/source-of-truth.md` (always)
- `.ai/rules/coding/coding-basics.md` (writing code)
- `.ai/rules/git/git-basics.md` (using git)

### Step 4: Match Skills by Trigger

The agent checks skill categories:
- `astrai/skill-bridge/SKILL.md` → routes dev tasks to Superpowers
- `dev/writing-plans/SKILL.md` → triggers for non-trivial features → MATCHED
- `dev/executing-plans/SKILL.md` → will trigger during implementation
- `dev/requesting-code-review/SKILL.md` → will trigger before merge
- `dev/verification-before-completion/SKILL.md` → will trigger before finish

### Step 5: Follow Protocol

The agent follows `.ai/protocols/dev/plan-then-implement.md`:
- Phase 1: Plan (using Superpowers `writing-plans` skill)
- Phase 2: Implement (using Superpowers `executing-plans` skill)
- Phase 3: Review (using Superpowers `requesting-code-review` skill)

### Step 6: Execute

Following Superpowers skills:
1. **Write plan** (`.ai/skills/dev/writing-plans/SKILL.md`) — using `.ai/templates/plan.template.md`
2. **User approves plan**
3. **Implement each step** (`.ai/skills/dev/executing-plans/SKILL.md`) — with verification after each
4. **Self-review** (`.ai/protocols/dev/review-before-finish.md`)
5. **Request code review** (`.ai/skills/dev/requesting-code-review/SKILL.md`)
6. **Verify completion** (`.ai/skills/dev/verification-before-completion/SKILL.md`)
7. **Finish branch** (`.ai/skills/dev/finishing-a-development-branch/SKILL.md`)

### Step 7: Update Memory

Following `.ai/protocols/astrai/memory-update-flow.md`, the agent writes a decision record `.ai/memory/decisions/YYYY-MM-DD-rate-limiting-approach.md`:
- **Decision**: In-memory rate limiting with configurable per-endpoint windows
- **Rationale**: Simple, meets current needs, distributed limiting deferred

---

## Key Takeaways

1. The agent never guessed — it followed the dispatcher → category → exact file path pattern
2. Dev tasks route through Superpowers skills via `skill-bridge`
3. Rules are loaded by category, not all at once
4. Dispatchers prevented context bloat
