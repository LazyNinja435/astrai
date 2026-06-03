# Dependency Changes

## Rule: No New Dependencies Without Approval

Do not add new packages or libraries unless:
- The user explicitly requests it
- It is clearly and unavoidably necessary for the task

## Rule: Use Existing Dependencies

Check `package.json`, `Cargo.toml`, `requirements.txt`, or equivalent before suggesting a new library. The project may already have what you need.

## Rule: Check Compatibility

Before adding a dependency, verify:
- It is compatible with the project's existing versions
- It is actively maintained
- It is not known to have security vulnerabilities

## Rule: Install Correctly

Use the project's package manager (npm, pnpm, yarn, pip, cargo, etc.). Do not install globally unless explicitly requested.
