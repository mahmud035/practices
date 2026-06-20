import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import ShoppingCart from '../src/components/ShoppingCart';

test('shows empty cart message initially', async () => {
  const screen = await render(<ShoppingCart />);

  await expect
    .element(screen.getByText('Your cart is empty'))
    .toBeInTheDocument();
});

test('adds a product to the cart and computes the total', async () => {
  // Set up
  const screen = await render(<ShoppingCart />);

  // Act
  // Two "Add to cart" buttons exist (Notebook, Pen) — .first() scopes to Notebook.
  await screen.getByRole('button', { name: 'Add to cart' }).first().click();

  // Check
  await expect.element(screen.getByText('Notebook x 1')).toBeInTheDocument();
  await expect.element(screen.getByText('Total: $5')).toBeInTheDocument();
});

test('increments quantity instead of duplicating the  row', async () => {
  // Set up
  const screen = await render(<ShoppingCart />);
  const addNoteBook = screen
    .getByRole('button', { name: 'Add to cart' })
    .first();

  // Act
  await addNoteBook.click();
  await addNoteBook.click();

  // Check
  await expect.element(screen.getByText('Notebook x 2')).toBeInTheDocument();
  await expect.element(screen.getByText('Total: $10')).toBeInTheDocument();
});

test('removes the item when quantity is decremented to zero', async () => {
  const screen = await render(<ShoppingCart />);

  await screen.getByRole('button', { name: 'Add to cart' }).first().click();
  await screen.getByRole('button', { name: '-' }).click();

  await expect
    .element(screen.getByText('Your cart is empty'))
    .toBeInTheDocument();
});

test('removes the item directly via the Remove button', async () => {
  const screen = await render(<ShoppingCart />);

  await screen.getByRole('button', { name: 'Add to cart' }).first().click();
  await screen.getByRole('button', { name: 'Remove' }).click();

  await expect
    .element(screen.getByText('Your cart is empty'))
    .toBeInTheDocument();
});
