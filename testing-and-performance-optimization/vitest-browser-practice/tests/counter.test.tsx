import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { Counter } from '../src/components/Counter';

test('renders initial count and increments on click', async () => {
  const screen = await render(<Counter />);

  await expect.element(screen.getByText('Count: 0')).toBeInTheDocument();

  await screen.getByRole('button', { name: 'Increment' }).click();

  await expect.element(screen.getByText('Count: 1')).toBeInTheDocument();
});

test('decrements on click', async () => {
  const screen = await render(<Counter />);

  await screen.getByRole('button', { name: 'Decrement' }).click();

  await expect.element(screen.getByText('Count: -1')).toBeInTheDocument();
});
