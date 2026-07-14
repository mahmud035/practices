import { useQuery } from '@tanstack/react-query';

export function useGithubStars(repo: string) {
  return useQuery({
    queryKey: ['githubStars', repo],
    queryFn: async () => {
      const response = await fetch(`https://api.github.com/repos/${repo}`);
      if (!response.ok) throw new Error('Failed to fetch stars');
      const data = await response.json();
      return data.stargazers_count;
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}
