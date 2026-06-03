# Example: Skill Authoring

This example walks through creating a new skill for AstrAI using the Superpowers `writing-skills` skill.

---

## Scenario

**Context:** The project uses PostgreSQL with Prisma ORM. Database migrations need careful handling.

**Goal:** Create a new skill: `dev/database-migrations/SKILL.md`

---

## Agent Execution Flow

### Step 1: Match Skill

The agent identifies the task as skill authoring → routes to Superpowers `dev/writing-skills/SKILL.md`.

### Step 2: Define Purpose and Trigger

Following `.ai/templates/skill.template.md`:
- **Purpose:** "Safely create, review, and apply database migrations using Prisma."
- **Trigger:** "When the user asks to create or apply a database migration"

### Step 3: Write the Skill

Following `writing-skills` workflow:
1. Define required inputs
2. Write numbered workflow steps
3. Define expected output
4. List forbidden behaviors
5. Add related items: rules, protocols, agents

### Step 4: Validate and Register

- Format matches `skill.template.md`: ✓
- Triggers are specific: ✓
- All sections complete: ✓
- Update `.ai/manifest.json` to register the new skill
- Update `.ai/skills/dev/README.md` if adding to dev category

---

## Key Takeaways

1. Superpowers `writing-skills` skill provides the authoring workflow
2. Template ensures consistent skill format
3. Skill is registered in manifest for discoverability
