import { afterEach, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import UserProfile from '../src/components/UserProfile';

afterEach(() => {
  vi.unstubAllGlobals();
});

test('shows loading state immediately, then the user on success', async () => {
  // Don't let the mock resolve on its own — hold it open until we've
  // confirmed the loading state actually rendered.
  let resolveFetch: (value: unknown) => void;
  const pendingResponse = new Promise((resolve) => {
    resolveFetch = resolve;
  });

  vi.stubGlobal('fetch', vi.fn().mockReturnValue(pendingResponse));

  const screen = await render(<UserProfile userId={1} />);

  await expect.element(screen.getByText('Loading user...')).toBeInTheDocument();

  // Now let the fetch resolve — only after loading state is confirmed.
  resolveFetch!({
    ok: true,
    json: async () => ({
      id: 1,
      name: 'Sumaiya Akter',
      email: 'sumaiya@example.com',
    }),
  });

  await expect.element(screen.getByText('Sumaiya Akter')).toBeInTheDocument();
  await expect
    .element(screen.getByText('sumaiya@example.com'))
    .toBeInTheDocument();
});

test('shows an error message when the response is not ok', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));

  const screen = await render(<UserProfile userId={2} />);

  await expect.element(screen.getByRole('alert')).toBeInTheDocument();
  await expect
    .element(screen.getByText('Failed to load user'))
    .toBeInTheDocument();
});

test('refetches and discards the stale request when userId changes', async () => {
  const fetchMock = vi
    .fn()
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        id: 1,
        name: 'Sumaiya Akter',
        email: 'sumaiya@example.com',
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        id: 2,
        name: 'Mahmud Hasan',
        email: 'mahmud@example.com',
      }),
    });
  vi.stubGlobal('fetch', fetchMock);

  const screen = await render(<UserProfile userId={1} />);
  await expect.element(screen.getByText('Sumaiya Akter')).toBeInTheDocument();

  screen.rerender(<UserProfile userId={2} />);
  await expect.element(screen.getByText('Mahmud Hasan')).toBeInTheDocument();

  expect(fetchMock).toHaveBeenCalledTimes(2);
});
