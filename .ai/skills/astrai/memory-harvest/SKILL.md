# Skill: Memory Harvest

## Purpose

Capture per-session learnings as one immutable event file in the event-sourced team memory. Events from all contributors are folded locally into a team knowledge view — no shared file is ever edited, so concurrent contributors never conflict.

## When to Use

- At the end of a substantive work session (you wrote files, fixed an error, or learned something a future agent should know)
- A clarification was answered, a mistake was corrected, a failure was diagnosed and fixed, or a reusable observation surfaced
- Skip on pure conversation turns with nothing durable to record

For durable curated context (decisions, constraints, glossary terms) use `astrai/memory-update` instead — this skill is for per-session learnings only.

## Required Inputs

- Contributor identity (derive from `git config user.name`, slugified; fall back to prompting)
- A task id or slug for the session
- The learnings: clarifications answered, corrections made, failures diagnosed, observations

## Workflow

1. **Resolve identity and date:** `<user>` = slugified git user name; `<date>` = today (UTC, `YYYY-MM-DD`).
2. **Write exactly ONE new event file:** `.ai/memory/events/<user>/<date>-<task-slug>.json` (create the `<user>` directory if needed; if the file already exists for this date + task, overwrite it — it is this session's own event):

   ```json
   {
     "user": "<user>",
     "task": "<task id or slug>",
     "context": "<area/component slug>",
     "date": "YYYY-MM-DD",
     "outcomes": [
       { "kind": "clarification", "topic": "<slug>", "key": "<context>:<topic>:<question-slug>", "question": "...", "answer": "..." },
       { "kind": "correction", "topic": "<slug>", "key": "<context>:<topic>:<mistake-slug>", "mistake": "...", "fix": "..." },
       { "kind": "failure-pattern", "topic": "<slug>", "key": "<context>:<topic>:<symptom-slug>", "symptom": "...", "rootCause": "...", "fix": "...", "resolved": true },
       { "kind": "observation", "topic": "<slug>", "key": "<context>:<topic>:<note-slug>", "note": "..." }
     ]
   }
   ```

   `key` is the deterministic dedup key (must match `slugify` in `scripts/memory/fold.ts`): lowercase the text, replace every run of non-alphanumeric characters with a single `-`, trim leading/trailing `-`. Content slugged per kind: clarification → `question`, correction → `mistake`, failure-pattern → `symptom`, observation → `note`. A session with nothing worth recording writes no event at all.
3. **Keep entries reusable:** `context` is the stable area/component slug, not the artifact you touched. One concise sentence per field (~150 chars). Strip task ids, file paths, and session-specific detail from content fields.
4. **Refresh the derived view (optional tooling):** run `npx tsx scripts/memory/fold.ts` from repo root. It folds snapshots + events into `sandbox/memory/knowledge.json` + `KNOWLEDGE.md` (gitignored) and prints hygiene warnings.
5. **Surface warnings:** if fold (or `--check`) warns that your events directory exceeds 25 files or holds events older than 60 days, report it and recommend a compaction pass (memory curator duty) — do not compact mid-harvest.

## Output

- One new event file under `.ai/memory/events/<user>/` (committed with the session's work)
- Refreshed local `sandbox/memory/knowledge.json` + `KNOWLEDGE.md`
- Any hygiene warnings, surfaced to the user

## Forbidden

- Editing, merging, or deleting any existing file under `.ai/memory/events/` or `.ai/memory/snapshots/`
- Writing more than one event file per session
- Hand-authoring computed fields (`seenCount`, `users`, `autoAnswer`, `systemic`) — the fold derives them
- Committing anything under `sandbox/` — derived views are local-only
- Storing secrets, credentials, raw code, or unresolved failures with no known fix

## Related

- Rules: `project/memory-events.md`, `project/memory-boundaries.md`
- Skills: `astrai/memory-update/SKILL.md`
- Agents: `astrai/memory-curator.md`
- Protocols: `astrai/memory-update-flow.md`
