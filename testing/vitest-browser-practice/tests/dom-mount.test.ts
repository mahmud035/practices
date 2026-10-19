import { expect, test } from 'vitest';
import { page } from 'vitest/browser';

test('mounts a heading and reads it back', async () => {
  document.body.innerHTML = '<h1>Hello, Vitest Browser Mode</h1>';

  await expect
    .element(page.getByText('Hello, Vitest Browser Mode'))
    .toBeInTheDocument();
});
