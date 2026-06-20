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
  // Set up
  const screen = await render(<Counter />);

  // Act
  await screen.getByRole('button', { name: 'Decrement' }).click();

  // Check
  await expect.element(screen.getByText('Count: -1')).toBeInTheDocument();
});

// =================================================\

// IMPORTANT:

// What Makes a Good Component Test

// Good component tests focus on behavior and user experience rather than implementation details:

/*
  Test the contract - How components receive inputs (props) and produce outputs (events, renders)

  Test user interactions - Clicks, form submissions, keyboard navigation

  Test edge cases - Error states, loading states, empty states

  Avoid testing internals - State variables, private methods, CSS classes
*/

// Component Testing Hierarchy

/*
  1. Critical User Paths → Always test these
  2. Error Handling      → Test failure scenarios
  3. Edge Cases          → Empty data, extreme values
  4. Accessibility       → Screen readers, keyboard nav
  5. Performance         → Large datasets, animations
*/

// Best Practices for Testing Components:

// 1. Use Browser Mode for CI/CD

// Ensure tests run in real browser environments for the most accurate testing. Browser Mode provides accurate CSS rendering, real browser APIs, and proper event handling.

// 2. Test User Interactions

// Simulate real user behavior using Vitest's Interactivity API. Use page.getByRole() and userEvent methods as shown in our Advanced Testing Patterns:

// 3. Test Accessibility

// Ensure components work for all users by testing keyboard navigation, focus management, and ARIA attributes. See our Testing Accessibility example for practical patterns:

// 4. Mock External Dependencies

// Focus tests on component logic by mocking APIs and external services. This makes tests faster and more reliable. See our Isolation Strategy for examples:

// 5. Use Meaningful Test Descriptions

// Write test descriptions that explain the expected behavior, not implementation details:

// Good: Describes user-facing behavior
// test('shows error message when email format is invalid');
// test('disables submit button while form is submitting');

// Avoid: Implementation-focused descriptions
// test('calls validateEmail function');
// test('sets isSubmitting state to true');

// Advanced Testing Patterns:
/* 
  Testing Component State Management
  Testing Async Components with Data Fetching
  Testing Component Communication
  Testing Complex Forms with Validation
  Testing Error Boundaries
  Testing Accessibility
*/
