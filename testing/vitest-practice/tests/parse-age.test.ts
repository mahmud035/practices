import { expect, test } from 'vitest';
import { parseAge } from '../src/parse-age';

// The happy path is straightforward, but the edge cases are where bugs hide:

test('parses a valid age', () => {
  expect(parseAge('25')).toBe(25);
});

test('rounds down decimal ages', () => {
  expect(parseAge('25.9')).toBe(25);
});

test('handles zero', () => {
  expect(parseAge('0')).toBe(0);
});

test('handles the upper boundary', () => {
  expect(parseAge('150')).toBe(150);
});

test('throws for negative numbers', () => {
  expect(() => parseAge('-1')).toThrow('Invalid age: -1');
});

test('throws for number above 150', () => {
  expect(() => parseAge('151')).toThrow('Invalid age: 151');
});

test('throws for non-numeric strings', () => {
  expect(() => parseAge('abc')).toThrow('Invalid age: abc');
});

// You don't need to test every possible input. Focus on the boundaries (0, 150, 151, -1), the error paths, and the types of inputs your function might realistically receive.

// IMPORTANT:
// If you're unsure whether an edge case matters, ask yourself: could a real user or a real caller trigger this? If yes, test it.

// Property-Based Testing
// For functions with a wide range of valid inputs, manually choosing edge cases can only go so far. Property-based testing is a technique where you describe the properties that should hold for any input, and the testing framework generates hundreds of random inputs to try to find one that breaks.

// For example, you might say "for any valid age string, parseAge should return a non-negative integer" and let the tool find the counterexample. fast-check is a popular property-based testing library that integrates well with Vitest. It's an advanced technique, but worth knowing about as your testing needs grow.

// =============================================

// When to Mock
// Mocking is a powerful tool, but it's easy to overuse.

// Slow Dependencies
// Network requests, file system operations, and database calls can make your tests take seconds instead of milliseconds. Replace them with mocks to keep the feedback loop fast.

// For HTTP requests specifically, consider using Mock Service Worker instead of mocking fetch directly. See the Mocking Requests guide for setup instructions.

// Non-Deterministic Values
// If your code depends on the current date, a random number, or a UUID generator, mock those to make your tests predictable. Vitest provides vi.useFakeTimers() and vi.setSystemTime() for controlling time in tests.

// What Not to Mock
// Don't mock the thing you're testing. If you're testing a UserService, don't mock the UserService. Mock its dependencies (the database, the email sender) and let the service itself run for real.

// Also, prefer real implementations when they're fast and reliable. If a dependency is a simple in-memory data structure or a pure function, there's no reason to mock it. The closer your tests are to real usage, the more confidence they give you.

// NOTE:
// Only reach for mocks when the real thing is slow, flaky, or has side effects you can't control in a test.

// Fixing Bugs with Tests
// When you find a bug, it's tempting to jump straight into the code and fix it. A better approach is to write a failing test first that reproduces the bug, then fix the code and watch the test turn green.

// This has several benefits. The test proves the bug is real and not just a misunderstanding. It documents exactly what was broken. And it prevents the same bug from coming back later, because the test will catch it if someone accidentally reintroduces the same problem.

// Here's what this looks like in practice. Suppose users report that parseAge crashes when given a string with leading spaces like " 25". First, write a test that reproduces the problem:

test('handles leading spaces', () => {
  expect(parseAge(' 25')).toBe(25);
});

// Run it and confirm it fails. Now you know exactly what's broken and have a clear target. Fix the implementation:

/*
  export function parseAge(input) {
    const age = Number(input.trim())
    // ...
  }
*/

// Run the test again. It passes. The bug is fixed, and you have a regression test that will catch it if someone removes the .trim() call later.

// IMPORTANT:
// If you use AI agents to fix bugs, configure them to follow the same principle: reproduce the issue with a failing test first, then fix the code. This prevents the agent from "fixing" a bug by changing the test instead of the code, and gives you confidence that the fix actually works.
