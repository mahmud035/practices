import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';
import { Dialog } from '../src/components/Dialog';

test('renders nothing when closed', async () => {
  const screen = await render(
    <Dialog isOpen={false} onClose={vi.fn()} title="Confirm delete">
      <p>Are you sure?</p>
    </Dialog>,
  );

  await expect.element(screen.getByRole('dialog')).not.toBeInTheDocument();
});

test('exposes proper dialog semantics and accessible name when open', async () => {
  const screen = await render(
    <Dialog isOpen={true} onClose={vi.fn()} title="Confirm delete">
      <p>Are you sure?</p>
    </Dialog>,
  );

  // getByRole('dialog', { name }) resolves the accessible name via
  // aria-labelledby — this is asserting real assistive-tech behavior,
  // not just "does the heading text happen to be on the page."
  const dialog = screen.getByRole('dialog', { name: 'Confirm delete' });
  await expect.element(dialog).toBeInTheDocument();
  expect(dialog.element().getAttribute('aria-modal')).toBe('true');
});

test('moves keyboard focus to the close button when opened', async () => {
  const screen = await render(
    <Dialog isOpen={true} onClose={vi.fn()} title="Confirm delete">
      <p>Are you sure?</p>
    </Dialog>,
  );

  const closeButton = screen.getByRole('button', { name: 'Close' });
  await expect.element(closeButton).toBeInTheDocument();

  // Focus runs inside a useEffect after commit — expect.poll() guards
  // against asserting before that effect has actually fired.
  await expect.poll(() => document.activeElement).toBe(closeButton.element());
});

test('calls onClose when Escape is pressed', async () => {
  const onClose = vi.fn();
  await render(
    <Dialog isOpen={true} onClose={onClose} title="Confirm delete">
      <p>Are you sure?</p>
    </Dialog>,
  );

  await userEvent.keyboard('{Escape}');

  expect(onClose).toHaveBeenCalledTimes(1);
});

test('calls onClose when the Close button is clicked', async () => {
  const onClose = vi.fn();
  const screen = await render(
    <Dialog isOpen={true} onClose={onClose} title="Confirm delete">
      <p>Are you sure?</p>
    </Dialog>,
  );

  await screen.getByRole('button', { name: 'Close' }).click();

  expect(onClose).toHaveBeenCalledTimes(1);
});
