# Example: Debug Flow

This example walks through how an AI agent diagnoses and fixes a bug using AstrAI's categorized structure and Superpowers debugging skill.

---

## Scenario

**User says:** "Users are getting 500 errors when uploading files larger than 10MB."

**Project:** A Node.js Express API with file upload endpoints

---

## Agent Execution Flow

### Step 1: Startup

The agent follows the mandatory startup flow:
1. Reads `AGENTS.md` → dispatcher
2. Reads `.ai/manifest.json` → index
3. Reads `.ai/rules/rules.md` → loads applicable rules: safety, project, coding
4. Reads `.ai/protocols/protocols.md` → matches `.ai/protocols/dev/debug-then-fix.md`

### Step 2: Match Skills

The agent checks for matching skills:
- `astrai/skill-bridge/SKILL.md` → routes to Superpowers
- `dev/systematic-debugging/SKILL.md` → MATCHED (bug report trigger)

### Step 3: Reproduce

Following `.ai/skills/dev/systematic-debugging/SKILL.md`:
1. Writes a reproduction test that uploads an 11MB file
2. Confirms: test fails with 500 error

### Step 4: Isolate

Traces through upload code:
1. `middleware/upload.ts` uses multer with `limits.fileSize: 10485760` (10MB)
2. When file exceeds limit, multer throws `MulterError`
3. Error handler in `middleware/errorHandler.ts` doesn't check for `MulterError` — only generic `Error`

**Fault Location:** `.ai/agents/dev/debugger.md` agent is delegated to isolate.

### Step 5: Understand Root Cause

**Root Cause:** Error handler treats `MulterError` as internal error → returns 500 instead of 413 (Payload Too Large).

### Step 6: Fix

The agent (following the debugger agent scope) applies minimal fix:
```typescript
if (err instanceof MulterError) {
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(413).json({ error: 'File too large', maxSize: '10MB' });
  }
}
```

### Step 7: Verify

- Reproduction test now passes (returns 413, not 500)
- All existing tests pass
- Manual test: 5MB file → 200 (still works)

### Step 8: Document

Agent produces debug report using `.ai/templates/debug-report.template.md`:
- Root cause documented
- Prevention tests added

### Step 9: Update Memory

Following `.ai/protocols/astrai/memory-update-flow.md`, writes a decision record in `.ai/memory/decisions/` if applicable, and harvests session learnings via `astrai/memory-harvest` (one immutable event file).

---

## Key Takeaways

1. The agent followed dispatchers → protocol → skill → agent path
2. Superpowers `systematic-debugging` skill drove the methodical approach
3. The fix was minimal — one conditional branch
4. Verification included reproduction case and regression testing
