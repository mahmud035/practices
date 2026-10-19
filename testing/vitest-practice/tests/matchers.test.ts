import { expect, test } from 'vitest';

// Common Matchers
// The simplest way to test a value is with exact equality. When you write expect(2 + 2).toBe(4), the toBe matcher checks that the value is exactly 4 using Object.is.

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

// This works great for primitive values like numbers, strings, and booleans.
// But when you're comparing objects, `toBe` checks identity (whether they're the exact same object in memory), not whether they have the same shape. That's where `toEqual` comes in. It recursively compares every field of an object or element of an array, ignoring object identity:

// So, for:
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

test('toEqual vs toStrictEqual', () => {
  // toEqual ignores undefined properties
  expect({ a: 1 }).toEqual({ a: 1, b: undefined });

  // toStrictEqual catches them
  // expect({ a: 1 }).toStrictEqual({ a: 1, b: undefined }); // Error
  expect({ a: 1, b: undefined }).toStrictEqual({ a: 1, b: undefined });

  // toEqual doesn't check object types
  class User {
    constructor(public name: string) {
      this.name = name;
    }
  }
  expect(new User('Alice')).toEqual({ name: 'Alice' });
  expect(new User('Alice')).not.toStrictEqual({ name: 'Alice' });
});

// NOTE: TIP
// A good rule of thumb: use `toBe` for primitives (numbers, strings, booleans), `toEqual` for comparing structure, and `toStrictEqual` when you also care about types and explicit `undefined` values.

// You can also negate any matcher by inserting `.not` before it. This is useful when you want to verify that something is not the case:

test('adding positive numbers is not zero', () => {
  expect(1 + 2).not.toBe(0);
});

// Truthiness
// In tests you sometimes need to distinguish between undefined, null, and false. Other times you don't care about the exact value and just want to know if something is truthy or falsy. Vitest provides matchers for both situations:

/*
  `toBeNull` matches only null

  `toBeUndefined` matches only undefined

  `toBeDefined` is the opposite of toBeUndefined. It passes for anything that isn't undefined

  `toBeTruthy` matches anything that an if statement would treat as true

  `toBeFalsy` matches anything that an if statement would treat as false
*/

// IMPORTANT:
// You should pick the matcher that most precisely describes what you're checking. Using toBeTruthy when you really mean toBeDefined can hide bugs, because 0 and "" are both defined but falsy.

test('null checks', () => {
  const n = null;

  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).toBeFalsy();
  expect(n).not.toBeTruthy();
  expect(n).not.toBeUndefined();
});

test('zero', () => {
  const z = 0;

  expect(z).toBeDefined(); // passes: 0 is defined
  expect(z).toBeFalsy(); // passes: 0 is falsy
  expect(z).not.toBeNull(); // passes: 0 not not null
});

// Numbers
// Most number comparisons are straightforward. Vitest provides the matchers you'd expect for greater-than, less-than, and equality checks:

test('number comparison', () => {
  const value = 2 + 2;
  expect(value).toBeLessThanOrEqual(4.5);

  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);

  // For exact equality, both toBe and toEqual work same for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// There is one common gotcha with floating point arithmetic. In JavaScript, 0.1 + 0.2 doesn't equal 0.3 exactly (it's 0.30000000000000004). This means a toBe(0.3) check will fail. Use toBeCloseTo instead, which compares numbers within a small rounding error:

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;

  // This won't work because of floating point rounding
  // expect(value).toBe(0.3);

  // This works
  expect(value).toBeCloseTo(0.3);
});

// Strings
// You can test strings against regular expressions with toMatch. This is especially handy when you care about a pattern rather than an exact value, like checking that an error message contains a certain word or that a URL matches a particular format:

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('version string matches semver format', () => {
  expect('vitest@1.0.0').toMatch(/vitest@\d+\.\d+\.\d+/);
});

// Arrays and Iterables
// toContain checks that an array (or any iterable, like a Set) includes a particular item. It uses === for comparison, so it works well for primitives:

test('the shopping list has milk in it', () => {
  const shoppingList = ['milk', 'bread', 'eggs', 'butter'];

  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

// If you need to check that an array contains an object with a particular structure, use toContainEqual instead. It works like toEqual but for individual items inside an array.

// Objects
// When testing objects, you often want to check only a few important fields without specifying every property. toMatchObject lets you do exactly that. It verifies that the object contains at least the properties you specify, and ignores any additional ones:

test('user has expected fields', () => {
  const user = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
    createAt: '2024-01-01',
  };

  // We only care about name and email
  expect(user).toMatchObject({
    name: 'Alice',
    email: 'alice@example.com',
  });
});

// For checking individual properties, especially nested ones, toHaveProperty is more readable. You pass a dot-separated path and optionally an expected value:

test('object has property', () => {
  const user = {
    name: 'Alice',
    address: { city: 'Paris', zip: 75001 },
  };

  expect(user).toHaveProperty('name');
  expect(user).toHaveProperty('name', 'Alice');
  expect(user).toHaveProperty('address.city', 'Paris');
  expect(user).toHaveProperty('address.zip');
});

// Asymmetric Matchers
// Sometimes you don't know the exact value, but you know its type or shape. Asymmetric matchers let you describe what a value should look like without pinning down the exact content. They work inside any matcher that does deep comparison, like toEqual or toMatchObject:

function createUser(name: string) {
  return {
    id: Math.floor(Math.random() * 10000) + 1,
    name,
    email: `${name.toLowerCase()}@example.com`,
    roles: ['viewer'],
  };
}

test('user has the right shape', () => {
  const user = createUser('Alice');

  expect(user).toEqual({
    id: expect.any(Number),
    name: 'Alice',
    email: expect.stringContaining('@'),
    roles: expect.arrayContaining(['viewer']),
  });
});

// Exceptions
// To verify that a function throws an error, use toThrow. You need to wrap the call in another function so that Vitest can catch the error instead of letting it crash the test:

function compileCode(code: string) {
  if (code === '') {
    throw new Error('Cannot compile empty string');
  }
  return code;
}

test('compiling an empty string throws', () => {
  // Check that it throws at all
  expect(() => compileCode('')).toThrow();

  // Check the error message
  expect(() => compileCode('')).toThrow('Cannot compile empty string');

  // Check the message with a regex
  expect(() => compileCode('')).toThrow(/empty string/);
});

// NOTE: TIP
// The wrapping function `() => compileCode('')` is important. If you wrote `expect(compileCode('')).toThrow()`, the error would be thrown before `expect` gets a chance to catch it, and the test would fail with an unhandled error instead.

// Soft Assertions
// Normally, a failing assertion stops the test immediately. That's useful most of the time, but sometimes you want to check several independent things and see all the failures at once rather than fixing them one by one.

// expect.soft does exactly that. It records the failure but lets the test keep running:

test('check multiple fields', () => {
  const user = { name: 'Alice', age: 30, role: 'admin' };

  expect.soft(user.name).toBe('Alice');
  // expect.soft(user.age).toBe(25); // this fails but execution continues
  expect(user.role).toBe('admin');
  // the test report will show that age doesn't match
});

// This is especially useful for validating the shape of an API response or a complex object where multiple fields might be wrong at the same time.
