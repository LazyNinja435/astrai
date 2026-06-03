# Example: Multi-Agent Review

This example walks through a multi-agent review of a significant feature using AstrAI's categorized structure and Superpowers parallel agent dispatch.

---

## Scenario

**Context:** A developer has implemented a new payment processing module that handles credit card data, stores transaction records, and integrates with a third-party payment API.

**Risk Level:** High (financial data, PII, third-party integration, database changes)

---

## Agent Execution Flow

### Step 1: Follow Protocol

The orchestrator follows `.ai/protocols/review/multi-agent-review.md`:
- Change is high-risk → multi-agent review warranted
- Uses Superpowers `dev/dispatching-parallel-agents/SKILL.md` for parallel dispatch

### Step 2: Select Panel

| Agent | Path | Focus |
|-------|------|-------|
| Reviewer | `.ai/agents/dev/reviewer.md` | Code correctness, style, conventions |
| Security Reviewer | `.ai/agents/security/security-reviewer.md` | PCI compliance, secret handling, input validation |
| Architect | `.ai/agents/dev/architect.md` | Module boundaries, coupling, data flow |

### Step 3: Prepare Briefs

Using `.ai/templates/agent-delegation.template.md`:
- **Reviewer brief:** Review `src/payments/` for correctness, error handling, conventions
- **Security brief:** Check credit card handling, API keys, input validation, PII logging
- **Architect brief:** Review module structure, database schema, external dependency handling

### Step 4: Dispatch in Parallel

Following Superpowers `dispatching-parallel-agents` skill — all 3 agents review simultaneously.

### Step 5: Synthesize

Using `.ai/templates/review.template.md`:
- Critical issues merged (credit card number logged in errors — found by both reviewer and security reviewer)
- Warnings categorized by source
- Contradictions flagged for human resolution

---

## Key Takeaways

1. Multi-agent review protocol + Superpowers parallel dispatch = comprehensive coverage
2. Each agent stayed in its defined scope per `.ai/agents/` definitions
3. Unified report per `review.template.md` gave single source of truth
4. Critical security issue (CC number logging) would likely have been missed by a general reviewer alone
