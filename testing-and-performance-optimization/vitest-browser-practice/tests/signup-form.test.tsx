import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import SignupForm from '../src/components/SignupForm';

test('shows error message when email format is invalid', async () => {
  const onSubmit = vi.fn();
  const screen = await render(<SignupForm onSubmit={onSubmit} />);

  const emailInput = screen.getByLabelText('Email');
  await emailInput.fill('not-an-email');
  expect((emailInput.element() as HTMLInputElement).value).toBe('not-an-email');

  await screen.getByLabelText('Password').fill('longenoughpassword');
  await screen.getByRole('button', { name: 'Sign up' }).click();

  await expect
    .element(screen.getByText('Please enter a valid email address'))
    .toBeInTheDocument();
  expect(onSubmit).not.toHaveBeenCalled();
});

test('shows error message when password is too short', async () => {
  const onSubmit = vi.fn();
  const screen = await render(<SignupForm onSubmit={onSubmit} />);

  await screen.getByLabelText('Email').fill('user@example.com');
  await screen.getByLabelText('Password').fill('short');
  await screen.getByRole('button', { name: 'Sign up' }).click();

  await expect
    .element(screen.getByText('Password must be at least 8 characters'))
    .toBeInTheDocument();
  expect(onSubmit).not.toHaveBeenCalled();
});

test('disables submit button while form is submitting', async () => {
  let resolveSubmit: () => void;
  const onSubmit = vi.fn(
    () =>
      new Promise<void>((resolve) => {
        resolveSubmit = resolve;
      }),
  );

  const screen = await render(<SignupForm onSubmit={onSubmit} />);

  await screen.getByLabelText('Email').fill('user@example.com');
  await screen.getByLabelText('Password').fill('longenoughpassword');
  await screen.getByRole('button', { name: 'Sign up' }).click();

  const submittingButton = screen.getByRole('button', {
    name: 'Signing up...',
  });
  await expect.element(submittingButton).toBeInTheDocument();
  expect(submittingButton.element().hasAttribute('disabled')).toBe(true);

  resolveSubmit!();

  await expect
    .element(screen.getByRole('button', { name: 'Sign up' }))
    .toBeInTheDocument();
});

test('submits with the entered values when validation passes', async () => {
  const onSubmit = vi.fn().mockResolvedValue(undefined);
  const screen = await render(<SignupForm onSubmit={onSubmit} />);

  await screen.getByLabelText('Email').fill('user@example.com');
  await screen.getByLabelText('Password').fill('longenoughpassword');
  await screen.getByRole('button', { name: 'Sign up' }).click();

  expect(onSubmit).toHaveBeenCalledWith({
    email: 'user@example.com',
    password: 'longenoughpassword',
  });
});
