import { useQuery } from "@tanstack/react-query";

interface GithubRepoResponse {
  stargazers_count: number;
}

function formatStarCount(count: number): string {
  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(1).replace(/\.0$/, "")}m`;
  }
  if (count >= 1_000) {
    return `${(count / 1_000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return String(count);
}

async function fetchStarCount(repo: string): Promise<number> {
  const response = await fetch(`https://api.github.com/repos/${repo}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const data: GithubRepoResponse = await response.json();
  return data.stargazers_count;
}

export function useGithubStars(repo: string) {
  const query = useQuery({
    queryKey: ["github-stars", repo],
    queryFn: () => fetchStarCount(repo),
    staleTime: 60 * 60 * 1000,
  });

  return {
    isPending: query.isPending,
    isError: query.isError,
    formattedCount:
      query.data !== undefined ? formatStarCount(query.data) : undefined,
  };
}
