---
author: <slugified-author>
date: <YYYY-MM-DD>
topics: [<topic-tag>, <topic-tag>]
status: open
---

# Huddle Session — <YYYY-MM-DD> — <author>

> Append-only architectural conversation log. One file per huddle session.
> Talk only — no implementation. Decided items graduate to a write-once record in `decisions/` (user-gated);
> unresolved items go to `open-questions.md`. Reference canonical files, never duplicate them.

## Context Loaded

- Read: `summary.md`, recent sessions (<list>)
- Picked up thread from: <previous session date or "fresh">

## Discussion

### <Topic / question being explored>

**Problem / idea:** <what we're thinking about>

**Approaches weighed:**
- Option A — <pros / cons>
- Option B — <pros / cons>

**Direction:** <where the conversation landed, or "still exploring">

<Repeat per topic discussed this session.>

## Outcomes This Session

- **Settled (→ proposed as a `decisions/` record, pending user approval):** <item or "none">
- **Open threads (→ `open-questions.md` / `ideas/<topic>.md`):** <item or "none">
- **Next time start here:** <where to resume>
