# Coding Basics

## Rule: Understand Before Editing

Read relevant files before editing them. Do not assume what a file contains. Verify before changing.

## Rule: Follow Existing Conventions

Mimic the project's existing style: formatting, naming, imports, comment density, framework patterns. Do not impose your own style preferences.

## Rule: Minimal Changes

Make the smallest change that accomplishes the task. Do not refactor unrelated code or change formatting in untouched files.

## Rule: Verify After Changing

After making changes: run tests, confirm compilation/typechecking, verify no regressions.

## Rule: Reuse Existing Code

Search for existing implementations before writing new helpers. Reuse, extend, or adapt — do not duplicate.

## Rule: No Dead Code

Remove commented-out code, unused imports, unused variables, and debug statements before finishing.

## Rule: Handle Errors Explicitly

Every fallible operation needs explicit error handling. Do not silently swallow errors. Provide meaningful error messages.

## Rule: Readable Code

Descriptive names, small functions (under ~50 lines), early returns to reduce nesting, comments explaining *why* not *what*.
