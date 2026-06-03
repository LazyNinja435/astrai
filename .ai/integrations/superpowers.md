# Superpowers Integration

## Overview

AstrAI integrates with [Superpowers](https://github.com/obra/superpowers) for development workflows. Superpowers provides a set of reusable agentic software-development skills that AstrAI uses directly.

## Upstream

- **Repository:** https://github.com/obra/superpowers
- **Skills source:** https://github.com/obra/superpowers/tree/main/skills
- **License:** MIT
- **Author:** Jesse Vincent / obra

## How AstrAI Uses Superpowers

- Superpowers skills are copied directly into `.ai/skills/dev/`
- AstrAI does NOT rewrite, paraphrase, or recreate Superpowers skills
- AstrAI's `skill-bridge` skill routes dev tasks to the appropriate Superpowers skill
- Protocols under `.ai/protocols/dev/` reference Superpowers skill paths

## What's in `.ai/skills/dev/`

The complete set of Superpowers skills, preserved as-is from upstream. See `.ai/skills/dev/README.md` for the full list.

## If Skills Are Missing

If `.ai/skills/dev/` is empty or incomplete:

```
git clone https://github.com/obra/superpowers
cp -r superpowers/skills/* .ai/skills/dev/
```

Do NOT invent replacement skill content. Report that `.ai/skills/dev/` needs to be populated from upstream.

## Harness-Specific Superpowers Support

Some harnesses may have official Superpowers installation support (e.g., `superpowers install` for Claude Code). If available, that can be used, but `.ai/skills/dev/` remains the repo-local copy.

## AstrAI-Specific Skills

AstrAI-authored skills live under `.ai/skills/astrai/` and are for AstrAI-specific operations only (startup, bootstrapping, memory management, dispatcher maintenance). They do NOT duplicate Superpowers dev skills.

## Attribution

See `.ai/NOTICE.md` and `.ai/vendor/superpowers/LICENSE`.
