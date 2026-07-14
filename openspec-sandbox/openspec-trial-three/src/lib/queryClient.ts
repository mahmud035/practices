import { QueryClient } from '@tanstack/react-query';

/**
 * Single app-wide TanStack Query client. A long default staleTime suits this
 * marketing page — its only live data (GitHub stars) changes slowly, so
 * navigations reuse the cache instead of refetching.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000, // 1 hour
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
