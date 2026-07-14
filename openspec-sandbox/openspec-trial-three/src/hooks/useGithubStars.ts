import { useQuery } from '@tanstack/react-query';
import { abbreviateCount } from '../lib/format';

interface GithubRepoResponse {
  stargazers_count: number;
}

async function fetchStars(repo: string, signal: AbortSignal): Promise<number> {
  // Pinned endpoint + API version so an upstream bump can't silently change the
  // response shape (design.md D6). Public repos send permissive CORS headers,
  // so the browser calls GitHub directly — no proxy or token.
  const res = await fetch(`https://api.github.com/repos/${repo}`, {
    signal,
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
  const data = (await res.json()) as GithubRepoResponse;
  return data.stargazers_count;
}

interface UseGithubStars {
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
  /** Abbreviated star count (e.g. "1.2k"), available only on success. */
  formatted: string | undefined;
  count: number | undefined;
}

/**
 * Fetches a repository's GitHub star count via TanStack Query. Relies on the
 * long default staleTime so navigations reuse the cache. Callers map the three
 * states to UI: pending → skeleton, error → hide the count, success → show the
 * abbreviated value (github-star-count spec).
 */
export function useGithubStars(repo: string): UseGithubStars {
  const query = useQuery({
    queryKey: ['github-stars', repo],
    queryFn: ({ signal }) => fetchStars(repo, signal),
  });

  return {
    isPending: query.isPending,
    isError: query.isError,
    isSuccess: query.isSuccess,
    count: query.data,
    formatted: query.data != null ? abbreviateCount(query.data) : undefined,
  };
}
