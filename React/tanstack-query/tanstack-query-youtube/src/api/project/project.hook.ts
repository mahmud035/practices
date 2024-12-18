import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getProjects, getProjectsTwo } from './project.api';

// Queries Hook
export const useGetProjectsQuery = (page = 1) => {
  return useQuery({
    queryKey: ['projects', { page }],
    queryFn: () => getProjects(page),
    placeholderData: keepPreviousData,
  });
};

export const useGetProjectsQueryTwo = (page = 1) => {
  return useQuery({
    queryKey: ['projects', { page }],
    queryFn: () => getProjectsTwo(page),
    placeholderData: keepPreviousData,
  });
};
