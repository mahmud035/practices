import { expect, test } from 'vitest';

// Common Matchers
// The simplest way to test a value is with exact equality. When you write expect(2 + 2).toBe(4), the toBe matcher checks that the value is exactly 4 using Object.is.

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

// This works great for primitive values like numbers, strings, and booleans.
// But when you're comparing objects, `toBe` checks identity (whether they're the exact same object in memory), not whether they have the same shape. That's where `toEqual` comes in. It recursively compares every field of an object or element of an array, ignoring object identity:

// NOTE:
// number, string, boolean -> toBe()
// array, object -> toEqual()

test('object assignment', () => {
  const data = { one: 1, two: 2 };

  expect(data).toEqual({ one: 1, two: 2 });
});

// Here's an example that shows the difference more clearly. Two objects with the same content are toEqual but not toBe:

test('toBe vs toEqual', () => {
  const a = { name: 'Alice' };
  const b = { name: 'Alice' };

  // These are different object in memory
  expect(a).not.toBe(b);

  // But they have same structure
  expect(a).toEqual(b);
});

// There's also toStrictEqual, which is stricter than toEqual in three ways: it checks undefined properties, distinguishes sparse arrays from undefined values, and verifies that objects have the same type (not just the same shape):
