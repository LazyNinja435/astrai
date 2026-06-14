# Skill: Huddle

## Purpose

Run a persistent, talk-only architectural conversation ("huddle mode") that resumes cleanly across sessions and agents. The agent acts as a project architect, explores ideas with the user, and logs the discussion to durable memory — like meeting notes, not the implementation itself.

## When to Use

- User says "enter huddle mode", "let's huddle", or "continue the huddle"
- User wants to explore, discuss, or rethink the project's architecture or implementation *without building yet*
- Resuming an ongoing architectural discussion from a previous session

Do NOT use for turning one idea into a spec to build now — that is the Superpowers `dev/brainstorming` skill.

## Required Inputs

- The architectural topic or question to explore
- Author identity (auto-derive from `git config user.name`/`user.email`, slugified; fall back to prompting)

## Workflow

1. **Load context (always):** Read `.ai/memory/huddle/summary.md` and the most recent files in `.ai/memory/huddle/sessions/` (chronological). Read core memory (`open-questions.md`, `constraints.md`, `project.md`; glob recent decision records in `decisions/`, newest first — titles only). Drill into `ideas/<topic>.md`, `archive/`, or full decision record bodies only when a topic or old thread is referenced.
2. **Resume:** Briefly summarize where the huddle left off and confirm with the user before continuing.
3. **Converse as architect:** Ask one question at a time. Weigh 2-3 approaches with trade-offs and a recommendation. Think in systems, not files.
4. **Log:** Append the discussion to today's session file `.ai/memory/huddle/sessions/YYYY-MM-DD-<author>.md` (create from `huddle-session.template.md` if new). Append-only.
5. **Record outcomes:** Note settled directions and open threads in the session file. Only propose graduation to a decision record (`.ai/memory/decisions/YYYY-MM-DD-<slug>.md`) — never write one without explicit user approval.
6. **Close out / compact:** On exit, write the "next time start here" note. If the active log has grown past a reasonable threshold, fold older sessions' essence into `summary.md` (rewrite, ~1 page) and move raw old files to `archive/`.

## Output

- Updated session log in `.ai/memory/huddle/sessions/`
- Updated `summary.md` continuity digest
- User-approved decisions recorded as write-once files in `decisions/`; open questions to `open-questions.md`

## Forbidden

- Writing, editing, or scaffolding ANY file outside `.ai/memory/` (hard gate — talk only)
- Writing code, plans, specs, or config
- Writing a decision record without explicit user approval
- Duplicating canonical content — reference decision records / `open-questions.md`, do not copy
- Storing secrets, credentials, or personal data in logs
- Recreating the Superpowers `dev/brainstorming` build-funnel workflow

## Related

- Agent: `astrai/huddle-architect.md`
- Protocols: `astrai/huddle-flow.md`
- Templates: `huddle-session.template.md`, `decision-record.template.md`
- Rules: `project/memory-boundaries.md`, `safety/secrets-and-credentials.md`
- Skills: `dev/brainstorming/SKILL.md` (Superpowers — for the build path, in a fresh agent)
