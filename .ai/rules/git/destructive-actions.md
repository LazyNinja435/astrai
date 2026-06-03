# Destructive Actions

## Rule: No Destructive Git Actions Without Approval

You must not execute any of the following without explicit user approval:
- `git push --force` on any branch
- `git reset --hard` that discards commits
- `git clean -fd` that deletes untracked files
- `git rebase` that rewrites shared history

## Rule: Read-Only Is Always Safe

`git status`, `git diff`, `git log`, `git branch`, `git show` are always allowed.

## Rule: Warn About Risky Operations

If a non-git operation could cause data loss (deleting files, dropping tables, removing resources), warn the user and get explicit confirmation before proceeding.
