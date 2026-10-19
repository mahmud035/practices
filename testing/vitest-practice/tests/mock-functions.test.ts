import { afterEach, expect, test, vi } from 'vitest';
import { getUser } from '../src/db';

// Mock Functions
// When writing tests, you often need to replace a real function or module with a controlled version. This is called mocking. There are several reasons you might want to do this: maybe the real function makes network requests that would slow down your tests, or maybe you need to simulate an error that's hard to trigger with real code. Mock functions let you control what a dependency returns, observe how it was called, and isolate the code under test from side effects.

// Vitest provides mocking utilities through the `vi` object.

// Creating Mock Functions
// The simplest way to create a mock is with vi.fn(). This gives you a function that does nothing by default (returns undefined), but tracks every call made to it:

test('mock function basics', () => {
  const getApples = vi.fn();

  // Call it
  getApples();

  // Check it was called
  expect(getApples).toHaveBeenCalled();
  expect(getApples).toHaveBeenCalledTimes(1);

  // By default, a mock returns undefined
  expect(getApples()).toBeUndefined();
});

// Mock Return Value
// A mock that always returns undefined isn't very useful on its own. You'll usually want to control what it returns so you can test how your code reacts to different values:

test('mock return values', () => {
  const getApples = vi.fn();

  // Always return this value
  getApples.mockReturnValue(10);
  expect(getApples()).toBe(10);

  // Return this value only once, then fall back to the default
  getApples.mockReturnValueOnce(20);
  expect(getApples()).toBe(20); // 20 (one-time)
  expect(getApples()).toBe(10); // back to default
});

// If the function you're mocking is async, use mockResolvedValue and mockRejectedValue to control the promise outcome:

test('mock async return values', async () => {
  const fetchUser = vi.fn();

  fetchUser.mockResolvedValue({ name: 'Alice' });
  const user = await fetchUser();
  expect(user.name).toBe('Alice');

  fetchUser.mockRejectedValue(new Error('Not found'));
  await expect(fetchUser()).rejects.toThrow('Not found');
});

// Mock Implementation
// Sometimes you need more than a fixed return value. You want the mock to actually do something with its arguments. mockImplementation lets you provide a full replacement function:

test('mock with custom implementation', () => {
  const add = vi.fn();
  add.mockImplementation((a, b) => a + b);

  expect(add(1, 2)).toBe(3);
  expect(add(10, 20)).toBe(30);
});

// As a shorthand, you can pass the implementation directly to vi.fn():
const add = vi.fn((a, b) => a + b);

// Inspecting Calls
// One of the most powerful things about mock functions is that they remember every call made to them. You can assert on how many times a function was called, what arguments it received, and what it returned:

test('inspecting mock calls', () => {
  const greet = vi.fn();

  greet('Alice');
  greet('Bob', 'Charlie');

  // Number of calls
  expect(greet).toHaveBeenCalledTimes(2);

  // Check specific arguments
  expect(greet).toHaveBeenCalledWith('Alice');
  expect(greet).toHaveBeenCalledWith('Bob', 'Charlie');

  // Check the arguments of a specific call by position
  expect(greet).toHaveBeenNthCalledWith(1, 'Alice');
  expect(greet).toHaveBeenLastCalledWith('Bob', 'Charlie');

  // Access the raw call data
  expect(greet.mock.calls).toEqual([['Alice'], ['Bob', 'Charlie']]);
});

// The `.mock` property gives you full access to the call history. In addition to .mock.calls, you can also inspect .mock.results to see what the mock returned (or threw) on each call:

const double = vi.fn((x) => x * 2);

double(5);
double(10);

expect(double.mock.results).toEqual([
  { type: 'return', value: 10 },
  { type: 'return', value: 20 },
]);

// Spying on Methods
// vi.spyOn is different from vi.fn() in an important way. Instead of creating a brand new function, it wraps an existing method on an object. The original implementation still works by default, but you can observe every call and optionally override the behavior:

const calculator = {
  add: (a: number, b: number) => a + b,
};

test('spy on a method', () => {
  const spy = vi.spyOn(calculator, 'add');

  // The original implementation still works
  expect(calculator.add(1, 2)).toBe(3);

  // But we can observe calls
  expect(spy).toHaveBeenCalledWith(1, 2);
  expect(spy).toHaveBeenCalledTimes(1);
});

test('spy can override implementation', () => {
  const spy = vi.spyOn(calculator, 'add');

  spy.mockReturnValue(42);

  expect(calculator.add(1, 2)).toBe(42);
});

// This is particularly useful when you want to verify that your code calls a method correctly without replacing the method's behavior entirely.

// IMPORTANT:
// Resetting Mocks
// Mock functions accumulate state as tests run. They remember every call, every return value, and any custom implementation you've set. If you don't reset them between tests, this state can leak and cause confusing failures. Vitest provides three levels of cleanup:

/*
  `mockClear()` clears the recorded call history and return values, but keeps any custom implementation you've set

  `mockReset()` does everything mockClear does, and also removes any custom implementation, returning the mock to its default state

  `mockRestore()` is specifically for spies created with vi.spyOn. It restores the original object method, effectively undoing the spy. On vi.fn() mocks, it behaves the same as mockReset
*/

// In practice, the easiest approach is to restore all mocks automatically after each test:

afterEach(() => {
  vi.restoreAllMocks();
});

test('spy is restored after the test', () => {
  const spy = vi.spyOn(calculator, 'add').mockReturnValue(42);
  expect(calculator.add(1, 2)).toBe(42);
  // afterEach will restore calculator.add to the original implementation
});

// Even better, you can configure this globally with the restoreMocks option so you don't need the afterEach at all:

// File: vitest.config.ts
// import { defineConfig } from 'vitest/config'

// export default defineConfig({
//   test: {
//     restoreMocks: true,
//   },
// })

// Mocking Modules
// Sometimes you need to replace an entire module rather than a single function. For example, a database client or a logger that you don't want running during tests. vi.mock lets you replace a module's exports with mock implementations:

vi.mock(import('../src/db'), () => ({
  getUser: vi.fn(),
}));

test('mock a module', () => {
  vi.mocked(getUser).mockReturnValue({ id: 1, name: 'Alice' });

  const user = getUser(1);
  expect(user.name).toBe('Alice');
  expect(getUser).toHaveBeenCalledWith(1);
});

// WARNING:
// vi.mock calls are hoisted to the top of the file. They run before any imports. This means the mocked version is in place by the time your test code runs.

// WARNING:
// Always pass import('./db.js') rather than a plain string './db.js'. When you use import(), TypeScript can infer the module's types, so the factory function's return value is type-checked and importOriginal returns the correctly typed module. As a bonus, if you rename or move the file in your IDE, the import path will be updated automatically. If you use a string, you lose both the type safety and the automatic refactoring.
