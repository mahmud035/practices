import { expect, test } from 'vitest';

// Debugging Failing Tests
// This page covers how to investigate test failures in Vitest: reading error output, isolating problems, identifying common causes, and using the available debugging tools.

// Async Issues
// Tests that involve promises can fail intermittently or in confusing ways if the async flow isn't handled correctly. The most common mistake is forgetting an await:

function fetchUser(id: number): Promise<{ id: number; name: string }> {
  const users: Record<number, { id: number; name: string }> = {
    1: { id: 1, name: 'Alice' },
    2: { id: 2, name: 'Bob' },
  };

  return Promise.resolve(users[id] ?? { id, name: 'Unknown' });
}

// Vitest will usually warn you about unawaited assertions at the end of the test. If you see that warning, add the missing await:

test('fetches user', async () => {
  await expect(fetchUser(1)).resolves.toMatchObject({ name: 'Alice' });
});

// If a test hangs and eventually times out, it usually means a promise never resolves. Check for missing callbacks, unresolved conditions, or deadlocks in the code you're testing.
