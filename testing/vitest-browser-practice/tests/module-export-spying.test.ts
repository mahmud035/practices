import { expect, test, vi } from 'vitest';
import * as module from '../src/module';

// spy: true wraps every export of the module in a spy WITHOUT
// replacing its real implementation — calls still execute for real
// unless you explicitly override one with mockImplementation.
vi.mock('../src/module.ts', { spy: true });

test('spies on a function export without faking it', async () => {
  // greet() still runs its real implementation here
  expect(module.greet('Alice')).toBe('Hello, Alice!');

  // but it's also a spy now - Vitest tracked the call
  expect(module.greet).toHaveBeenCalledWith('Alice');
  expect(module.greet).toHaveBeenCalledTimes(1);
});

test('overrides the spy with a custom implementation', () => {
  vi.mocked(module.greet).mockImplementation(() => 'Mocked greeting');

  expect(module.greet('anyone')).toBe('Mocked greeting');
});
