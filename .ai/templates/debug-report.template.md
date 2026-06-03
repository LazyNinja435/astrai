# Debug Report: <Bug Title>

**Date:** <YYYY-MM-DD>
**Debugger:** <Agent/Person>
**Severity:** <Critical | High | Medium | Low>

---

## Bug Summary

**Reported Behavior:** <What was observed>
**Expected Behavior:** <What should have happened>
**Reproduction:** <Steps or test command to reproduce>

---

## Investigation

### Reproduction Confirmed
<Describe how the bug was reproduced and confirmed>

### Isolation
- **Fault Location:** `<file>:<line>` — `<function or component>`
- **Affected Scope:** <What parts of the system are affected>

### Root Cause Analysis

**Root Cause:** <Why the bug occurs. What assumption is violated?>

**Details:**
<Technical explanation of the root cause. Include relevant code snippets.>

---

## Fix

### Hypothesis
"If <change description>, the bug will be resolved because <reasoning>."

### Change Applied
- **File:** `<file>`
- **Change:** <Description of the fix>
- **Lines Changed:** <count>

```diff
// Key part of the fix (conceptual)
- old code
+ new code
```

### Why This Fix Is Correct
<Justification for why this fix addresses the root cause, not just the symptom>

---

## Verification

### Fix Verification
- [ ] Bug no longer reproduces with original reproduction steps
- [ ] Fix was tested with edge cases:
  - <Edge case 1>: <Result>
  - <Edge case 2>: <Result>

### Regression Check
- [ ] Full test suite passes
- [ ] No new test failures introduced
- [ ] Related functionality still works

**Test Results:**
```
<Test output summary>
```

---

## Prevention

### How to Prevent Similar Bugs
- <Recommendation 1>
- <Recommendation 2>

### Tests Added
- <Test 1> — covers <scenario>
- <Test 2> — covers <scenario>

---

## Notes

<Any additional observations, patterns, or context>
