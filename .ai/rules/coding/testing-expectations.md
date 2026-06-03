# Testing Expectations

## Rule: Write Tests for New Logic

New functionality must include tests. Tests should cover:
- The happy path
- At least one error or edge case
- Integration points with existing code

## Rule: Fix Broken Tests

If your changes break existing tests, fix the tests (if the behavior change is intentional) or fix your code (if the test failure reveals a bug). Do not delete tests to make your code pass.

## Rule: Match Existing Test Patterns

Follow the project's existing test framework, naming conventions, file organization, and assertion style.

## Rule: Test Behavior, Not Implementation

Tests should verify what code does, not how it does it. Avoid testing internal implementation details that could change during refactoring.

## Rule: Keep Tests Fast

Unit tests should run quickly. Use mocks, stubs, or fakes for external dependencies. Do not write tests that require network access or real databases unless following existing project patterns.
