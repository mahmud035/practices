import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from 'vitest';

// Setup and Teardown
// Often while writing tests, you need to do some work before tests run (initialize data, connect to a database, start a server) and clean up afterwards. Rather than duplicating this code in every test, Vitest provides lifecycle hooks that run automatically at the right tim

// Repeating Setup for Each Test
// The most common hooks are beforeEach and afterEach. As the names suggest, beforeEach runs before every test in the file, and afterEach runs after every test, even if the test fails. This makes them perfect for ensuring each test starts with a known state.

let items: string[];

beforeEach(() => {
  items = ['apple', 'banana', 'cherry'];
});

afterEach(() => {
  items = [];
});

test('items starts with 3 fruits', () => {
  expect(items).toHaveLength(3);
});

test('can add an item', () => {
  items.push('date');
  expect(items).toHaveLength(4);
  // afterEach will reset items for the next test.
  // so this mutation won't lean into other tests
});

// Without these hooks, the second test's push would affect any test that runs after it, which is a classic source of flaky tests. The hooks guarantee clean state for every test.

// Scoping with `describe`
// Hooks `defined` inside a describe block only apply to the tests within that block. Top-level hooks apply to every test in the file. This lets you set up different state for different groups of tests:

describe('math operations', () => {
  let value: number;

  beforeEach(() => {
    value = 0;
  });

  test('can add', () => {
    value += 5;
    expect(value).toBe(5);
  });

  test('can subtract', () => {
    value -= 3;
    expect(value).toBe(-3); // value was reset to 0 by beforeEach
  });
});

describe('string operations', () => {
  let text: string;

  beforeEach(() => {
    text = 'hello';
  });

  test('can uppercase', () => {
    expect(text.toUpperCase()).toBe('HELLO');
  });
});

// Each describe block has its own beforeEach that only affects the tests inside it. The string tests don't know or care about the value variable, and vice versa.

// Execution Order
// When you have hooks at multiple levels, it's helpful to understand the order they run in. Top-level hooks wrap around inner hooks, forming a nesting structure:

beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('8 - afterAll'));
beforeEach(() => console.log('2 - beforeEach'));
afterEach(() => console.log('5 - afterEach'));

describe('suite', () => {
  beforeEach(() => console.log('3 - inner beforeEach'));
  beforeEach(() => console.log('4 - inner afterEach'));

  test('first test', () => {
    console.log('  first test');
  });

  test('second test', () => {
    console.log('  second');
  });
});

// NOTE:
// Notice the pattern: beforeAll and afterAll run once for the entire suite, while beforeEach and afterEach repeat for every test. Within each test, outer beforeEach runs first (setting up the broadest context), then inner beforeEach runs (narrowing the context). After the test, the order reverses: inner afterEach cleans up the narrow context first, then outer afterEach handles the broader cleanup.
