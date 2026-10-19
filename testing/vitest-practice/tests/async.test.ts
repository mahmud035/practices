import { expect, test } from 'vitest';

// Testing Asynchronous Code
// JavaScript code frequently runs asynchronously. Whether you're fetching data, reading files, or waiting on timers, Vitest needs to know when the code it is testing has completed before moving on to the next test. Here are the patterns you'll use most often.

// Async/Await
// The most straightforward approach is to make your test function async. Vitest will automatically wait for the returned promise to resolve before considering the test complete. If the promise rejects, the test fails with the rejection reason.

function fetchUser(id: number) {
  return Promise.resolve({ id, name: 'Alice' });
}

test('fetches user by id', async () => {
  const user = await fetchUser(1);
  expect(user.name).toBe('Alice');
});

// IMPORTANT:
// This is the pattern you'll use the vast majority of the time. It reads just like synchronous code, and errors propagate naturally through await.

// Resolves and Rejects
// Sometimes you'd rather assert on a promise directly instead of await-ing it into a variable first. The .resolves and .rejects helpers let you do this. They unwrap the promise and then apply the matcher to the resolved or rejected value:

test('resolves to Alice', async () => {
  await expect(fetchUser(1)).resolves.toMatchObject({ name: 'Alice' });
});

function fetchInvalidUser(): any {
  return Promise.reject(new Error('User not found'));
}

test('rejects with an error', async () => {
  await expect(fetchInvalidUser()).rejects.toThrow('User not found');
});

// WARNING:
// Don't forget the await before expect. Vitest will detect unawaited assertions and print a warning at the end of the test, but it's best to always include await explicitly. Vitest will also wait for all pending promises in Promise.all before starting the next test, but relying on this behavior makes tests harder to understand.

// Assertion Counting
// With async code, there's a subtle risk: an assertion inside a callback or .then() chain might never execute, and the test would still pass because no assertion failed. expect.hasAssertions() guards against this by verifying that at least one assertion ran during the test:

function fetchData(): Promise<{ items: { id: number }[] }> {
  // Simulate asynchronous data retrieval
  return Promise.resolve({ items: [{ id: 1 }, { id: 2 }, { id: 3 }] });
}

test('callback is invoked', async () => {
  expect.hasAssertions();

  const data = await fetchData();
  data.items.forEach((item) => {
    expect(item.id).toBeDefined();
  });
  // if data.items is empty, the test fails instead of silently passing
});

// When you know exactly how many assertions should run, expect.assertions(n) is more precise:

function fetchUser2(id: number) {
  return Promise.resolve({ id, name: 'Bob' });
}

test('both callbacks are called', async () => {
  expect.assertions(2);

  await Promise.all([
    fetchUser(1).then((user) => expect(user.name).toBe('Alice')),
    fetchUser2(2).then((user) => expect(user.name).toBe('Bob')),
  ]);
});

// In most cases, async/await with direct assertions is clear enough and you don't need assertion counting. It's most useful when assertions are inside callbacks, loops, or conditional branches where you want to guarantee they actually executed.

// Timeouts
// By default, each test has a 5-second timeout. If a test takes longer than that (perhaps because a promise never resolves, or a network request hangs), it will fail with a timeout error. This prevents your test suite from getting stuck indefinitely.

// You can set a custom timeout as the third argument to test, which is useful for tests that legitimately need more time:

// function someSlowOperation(): Promise<void> {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   });
// }

// test('long-running operation', async () => {
//   await someSlowOperation();
// }, 10_000); // 10 seconds

// Unhandled Rejections
// By default, Vitest reports unhandled promise rejections as errors in the test run. If a promise rejects somewhere in your code and nothing catches it, the test run will fail, even if all your assertions passed. This is intentional: unhandled rejections usually indicate real bugs, like a forgotten await or a fire-and-forget promise that silently fails.

// test('this cause an unhandled rejection error', () => {
//   // This promise rejects but is never awaited or caught
//   Promise.reject(new Error('oops'));
// });

// To fix this, make sure you await all promises or catch expected rejections:
test('handle the rejection', async () => {
  // Either await the promise
  await expect(Promise.reject(new Error('oops'))).rejects.toThrow('oops');

  // Or catch it explicitly if you don't need to assert on it
  Promise.reject(new Error('expected')).catch(() => {});
});

// If your code intentionally produces unhandled rejections, you can filter specific errors with onUnhandledError or disable the check entirely with dangerouslyIgnoreUnhandledErrors.
