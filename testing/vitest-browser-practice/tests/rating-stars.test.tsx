import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import RatingStars from '../src/components/RatingStars';

test('notifies the parent with the clicked star value', async () => {
  const onRatingChange = vi.fn();
  const screen = await render(
    <RatingStars value={0} onRatingChange={onRatingChange} />,
  );

  await screen.getByRole('radio', { name: '3 stars' }).click();

  expect(onRatingChange).toHaveBeenCalledWith(3);
  expect(onRatingChange).toHaveBeenCalledTimes(1);
});

test('reflect the current value as filled stars', async () => {
  const screen = await render(
    <RatingStars value={2} onRatingChange={vi.fn()} />,
  );

  const star1 = screen.getByRole('radio', { name: '1 star' });
  const star2 = screen.getByRole('radio', { name: '2 stars' });
  const star3 = screen.getByRole('radio', { name: '3 stars' });

  await expect.element(star1).toBeInTheDocument();
  expect(star1.element().getAttribute('aria-checked')).toBe('true');
  expect(star2.element().getAttribute('aria-checked')).toBe('true');
  expect(star3.element().getAttribute('aria-checked')).toBe('false');
});

test('updates the display when the parent re-renders with a new value', async () => {
  const screen = await render(
    <RatingStars value={1} onRatingChange={vi.fn()} />,
  );

  const star4 = screen.getByRole('radio', { name: '4 stars' });
  await expect.element(star4).toBeInTheDocument();
  expect(star4.element().getAttribute('aria-checked')).toBe('false');

  // The component never changes its own state — it's the parent's
  // responsibility to feed back the new value after onRatingChange fires.
  screen.rerender(<RatingStars value={4} onRatingChange={vi.fn()} />);

  // getAttribute() is a one-shot read with no retry — expect.poll()
  // gives it the same auto-retry behavior expect.element() has for
  // text, but for an arbitrary value (an attribute, here).
  await expect
    .poll(() => star4.element().getAttribute('aria-checked'))
    .toBe('true');
});
