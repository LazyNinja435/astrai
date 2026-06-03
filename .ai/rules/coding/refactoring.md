# Refactoring

## Rule: No Unrequested Refactoring

Do not refactor code unless:
- The user explicitly asks for it
- It is a necessary part of the requested change (and minimal)

## Rule: Preserve Behavior

When refactoring, the external behavior must remain identical. Tests must pass before and after.

## Rule: Refactor in Small Steps

If refactoring is needed, do it in small, verifiable steps. Run tests after each step.

## Rule: Don't Mix Refactoring With Features

Do not combine refactoring and feature changes in the same changeset without explicit direction.
