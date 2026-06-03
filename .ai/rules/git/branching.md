# Branching

## Rule: Branch Naming

Use descriptive branch names:
- `feature/<description>` for new features
- `fix/<description>` for bug fixes
- `refactor/<description>` for refactoring
- `docs/<description>` for documentation
- `chore/<description>` for maintenance

## Rule: No Force Push to Shared Branches

Never force-push to `main`, `master`, `develop`, or any branch likely shared with others. Force-push only to personal feature branches and only when necessary.

## Rule: Pull Before Push

Always pull/rebase before pushing to avoid unnecessary merge conflicts. Resolve conflicts carefully and verify tests still pass.

## Rule: One Feature Per Branch

A branch should address one logical change. Do not mix unrelated changes in the same branch.
