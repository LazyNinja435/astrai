# Dependency Risk

## Rule: Check for Known Vulnerabilities

Before adding or updating a dependency, check for known vulnerabilities. Flag any CVEs.

## Rule: Prefer Established Libraries

Choose dependencies that are:
- Actively maintained (recent commits)
- Widely used (community trust)
- Well-documented
- Appropriately licensed

## Rule: Minimize Dependency Footprint

Every new dependency is a supply chain risk. Prefer using what's already available over adding new dependencies.

## Rule: Pin Versions

Dependencies should be pinned to specific versions, not floating ranges. Reproducible builds require deterministic dependencies.
