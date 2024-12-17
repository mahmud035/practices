import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getProjects } from './project.api';

// Queries Hook
export const useGetProjectsQuery = (page = 1) => {
  return useQuery({
    queryKey: ['projects', page],
    queryFn: () => getProjects(page),
    placeholderData: keepPreviousData,
  });
};
