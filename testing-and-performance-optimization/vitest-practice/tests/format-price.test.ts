import { expect, test } from 'vitest';
import { formatPrice } from '../src/format-price';

test('formats USD prices', () => {
  expect(formatPrice(10, 'USD')).toBe('$10.00');
});

test('formats EUR prices', () => {
  expect(formatPrice(10, 'EUR')).toBe('€10.00');
});

test('handle zero', () => {
  expect(formatPrice(0, 'USD')).toBe('$0.00');
});

test('handles negative amounts', () => {
  expect(formatPrice(-5.5, 'USD')).toBe('-$5.50');
});

test('rounds to two decimal places', () => {
  expect(formatPrice(10.999, 'USD')).toBe('$11.00');
});

// Notice what these tests don't do. They don't check which internal Intl.NumberFormat options were passed, or whether an intermediate variable was set. They only check the output.

// NOTE:
// A good rule of thumb: if someone refactors the internals but the output stays the same, should the test break? If it would, you're probably testing implementation details rather than behavior.

// =============================================
class ShoppingList {
  private items: string[] = [];

  add(item: string) {
    this.items.push(item);
  }

  remove(item: string) {
    this.items = this.items.filter((current) => current !== item);
  }

  getItems() {
    return this.items;
  }
}

// Structuring a Test
// Most tests follow a natural three-part structure, sometimes called "Arrange, Act, Assert":

/* 
  1. Set up the data your test needs
  2. Call the function or perform the action you're testing
  3. Check that the result matches your expectations
*/

test('removes an item from the list', () => {
  // 1. Set up
  const list = new ShoppingList();
  list.add('milk');
  list.add('bread');

  // 2. Act
  list.remove('milk');

  // 3. Check
  expect(list.getItems()).toEqual(['bread']);
});

// You don't need comments labeling each section. The structure becomes natural once you've written a few tests.

// IMPORTANT:
// The important thing is keeping each test focused on one behavior.

// One Behavior Per Test
// If you find yourself writing "and" in a test name ("formats price and handles errors and logs the result"), that's a sign you should split it into separate tests.

// Descriptive Names
// Write test names that describe the behavior, not the implementation. "returns formatted price for USD" is better than "calls Intl.NumberFormat with correct options". When a test fails, the name should tell you what broke without having to read the test body.
