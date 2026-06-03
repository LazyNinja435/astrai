# Git Basics

## Rule: Read-Only First

You may run read-only git commands (`status`, `diff`, `log`, `branch`, `show`) freely for context gathering.

## Rule: No Commit Without Explicit Request

Do not run `git commit` or `git push` unless the user explicitly asks. You may stage files (`git add`) when preparing changes.

## Rule: Meaningful Commits

Each commit must:
- Have a clear, descriptive message in imperative mood ("Add user authentication")
- Contain logically related changes (one concern per commit)
- Not mix refactoring with feature changes
- Reference issue when available

## Rule: Commit Message Format

```
<type>: <short description>
```
Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `style`, `perf`, `ci`

## Rule: No Broken Code

Do not commit code that fails to compile, has type errors, or breaks existing tests.
