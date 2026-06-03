# Project Memory

> This file stores durable project-level context. Update only when the project's fundamental nature changes. Do not store secrets or temporary notes.

## Identity

**Project Name:** AstrAI
**Repository:** astrai
**Tagline:** The astra for intelligence.

## Purpose

AstrAI is a harness-agnostic AI project base that provides a portable operating layer for AI agents. It organizes rules, skills, agents, protocols, templates, and memory under `.ai/` with categorized role/domain folders.

## Tech Stack

- **Primary Language:** Markdown / JSON (template project)
- **This project is:** A reusable project base/template, not a runnable application

## Architecture

```
.ai/
  rules/          ← Categorized rules (project, git, safety, coding, documentation, artifacts, security)
  skills/         ← Categorized skills (dev/Superpowers, astrai, product-owner, qa, documentation, security, release)
  agents/         ← Categorized agents (astrai, dev, product-owner, qa, documentation, security, release)
  protocols/      ← Categorized protocols (astrai, dev, product-owner, qa, review, release)
  templates/      ← Standardized output formats
  memory/         ← Durable project context (this file)
  integrations/   ← External integration docs
  vendor/         ← Third-party vendor content
  harnesses/      ← Harness-specific adapter guidance
```

## Key Design Decisions

- Dispatchers before details: agents read dispatcher files first, then load only what's needed
- Harness-agnostic: works with any AI coding tool
- Human-readable first: all files are Markdown or JSON
- Superpowers skills for dev workflows: `.ai/skills/dev/`
- Categorized roles: skills, agents, and protocols grouped by domain
