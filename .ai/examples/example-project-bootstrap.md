# Example: Project Bootstrap

This example walks through bootstrapping AstrAI into an existing project using the categorized structure.

---

## Scenario

**Context:** The user has an existing Node.js/TypeScript REST API project and wants to set up AstrAI.

**User says:** "Set up AstrAI for this project."

---

## Agent Execution Flow

### Step 1: Follow Bootstrap Protocol

The agent follows `.ai/protocols/astrai/new-project-bootstrap.md` and loads `astrai/project-bootstrap/SKILL.md`.

### Step 2: Populate Memory

`.ai/memory/project.md` — project identity, tech stack, architecture.
`.ai/memory/constraints.md` — project-specific constraints.

### Step 3: Curate Rules

| Category | Action |
|----------|--------|
| `safety/` | KEEP all (always mandatory) |
| `project/` | KEEP all (customize project-scope) |
| `coding/` | KEEP all (customize for TypeScript) |
| `git/` | KEEP all |

### Step 4: Curate Skills

| Category | Action |
|----------|--------|
| `dev/` (Superpowers) | KEEP all |
| `astrai/` | KEEP all |
| `product-owner/` | KEEP (team has PO) |
| `qa/` | KEEP (team has QA) |
| `documentation/` | KEEP |
| `security/` | KEEP |
| `release/` | REMOVE (separate process) |

### Step 5: Curate Agents and Protocols

Similarly curate agents and protocols — keep what fits, remove what doesn't.

### Step 6: Select Harness

Team uses **Cursor** and **Claude Code**:
- Read `.ai/harnesses/cursor/README.md`
- Read `.ai/harnesses/claude-code/README.md`

### Step 7: Update Manifest and Commit

- Update `.ai/manifest.json` to reflect customizations
- Validate all references resolve
- Commit with descriptive message

---

## Key Takeaways

1. Bootstrap is about curation, not just copying
2. Memory files must be populated with real context
3. Not every category needs all skills/agents/protocols
4. Manifest reflects final state
