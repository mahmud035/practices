import { describe, expect, test } from 'vitest';

// Your First Test
// A test verifies that a piece of code produces the expected result. In Vitest, you use the test function to define a test, and expect to make assertions. Each test has a name (a string describing what it checks) and a function that contains one or more assertions. If any assertion fails, the test fails.

test('Math.sqrt works for perfect squares', () => {
  expect(Math.sqrt(4)).toBe(2);
  expect(Math.sqrt(144)).toBe(12);
  expect(Math.sqrt(0)).toBe(0);
});

// Grouping Tests with `describe`
// As your test files grow, you'll want to organize related tests together. describe creates a test suite, which is a named group of tests:

describe('Math.sqrt', () => {
  test('returns the square root of perfect squares', () => {
    expect(Math.sqrt(4)).toBe(2);
    expect(Math.sqrt(9)).toBe(3);
  });

  test('returns NaN for negative numbers', () => {
    expect(Math.sqrt(-1)).toBeNaN();
  });

  test('returns 0 for 0', () => {
    expect(Math.sqrt(0)).toBe(0);
  });
});

// Testing TypeScript
interface User {
  name: string;
  age: number;
}

function createUser(name: string, age: number): User {
  return { name, age };
}

test('creates a user with the correct fields', () => {
  const user = createUser('Alice', 30);

  expect(user).toEqual({ name: 'Alice', age: 30 });
  expect(user.name).toBe('Alice');
});

// Skipping and Focusing Tests
// While developing, you'll often want to run only a subset of tests. Vitest provides modifiers for this:

// test.only('focus on this test', () => {
//   // only this test runs in this file
// });

// test.skip('not ready yet', () => {
//   // this test is skipped
// });

// test.todo('implement validation later');

// Parameterized Tests
// When you have several test cases that only differ in their inputs and expected outputs, writing a separate test for each one gets repetitive. test.for lets you define the cases as data and run the same test logic for all of them:

test.for([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('add(%i, %i) -> %i', ([a, b, expected]) => {
  expect(a + b).toBe(expected);
});

// The placeholders %i, %s, and %f in the test name are replaced with the corresponding values from each row, so the output shows:
// add(1, 1) -> 2, add(1, 2) -> 3, and so on.

// If your cases have more than two or three values, passing objects is more readable. Use $property in the name to interpolate fields:

test.for([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
])('add($a, $b) -> $expected', ({ a, b, expected }) => {
  expect(a + b).toBe(expected);
});
