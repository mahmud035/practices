import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { BuggyWidget } from '../src/components/BuggyWidget';
import { ErrorBoundary } from '../src/components/ErrorBoundary';

let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  // React logs caught render errors to console.error by design, even
  // when the boundary handles them gracefully. Silence it so a
  // passing test doesn't read like a crash in the terminal output.
  consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  consoleErrorSpy.mockRestore();
});

test('renders children normally when nothing throws', async () => {
  const screen = await render(
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <BuggyWidget shouldThrow={false} />
    </ErrorBoundary>,
  );

  await expect
    .element(screen.getByText('Widget is working fine'))
    .toBeInTheDocument();
});

test('catches the render error and shows the fallback UI', async () => {
  const screen = await render(
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <BuggyWidget shouldThrow={true} />
    </ErrorBoundary>,
  );

  await expect.element(screen.getByRole('alert')).toBeInTheDocument();
  await expect
    .element(screen.getByText('Something went wrong'))
    .toBeInTheDocument();
});

test('reports the thrown error via onError', async () => {
  const onError = vi.fn();

  await render(
    <ErrorBoundary fallback={<p>Something went wrong</p>} onError={onError}>
      <BuggyWidget shouldThrow={true} />
    </ErrorBoundary>,
  );

  expect(onError).toHaveBeenCalledTimes(1);
  expect(onError.mock.calls[0][0].message).toBe('BuggyWidget exploded');
});

test('recovers once the error condition is actually resolved', async () => {
  const screen = await render(
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <BuggyWidget shouldThrow={true} />
    </ErrorBoundary>,
  );

  await expect.element(screen.getByRole('alert')).toBeInTheDocument();

  // The realistic version of "Try again": in a real app, this pairs
  // with the parent fixing whatever caused the error (e.g. retrying
  // a failed fetch). Clicking "Try again" alone does nothing if the
  // same throwing child remounts — it would just error right back.
  screen.rerender(
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <BuggyWidget shouldThrow={false} />
    </ErrorBoundary>,
  );

  await screen.getByRole('button', { name: 'Try again' }).click();

  await expect
    .element(screen.getByText('Widget is working fine'))
    .toBeInTheDocument();
});
