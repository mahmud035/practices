import { expect, test } from 'vitest';
import { changeMode, MODE } from '../src/module.js';

test('changes an exported variable via its setter', () => {
  expect(MODE).toBe('test');

  changeMode('production');

  expect(MODE).toBe('production');
});
