import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createJob, deleteJob, getJobs } from './jobs.api';

// Query Hooks
export const useGetJobs = () => {
  return useQuery({
    queryKey: ['jobs'],
    queryFn: getJobs,
  });
};

// Mutation Hooks
export const useCreateJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
};

export const useDeleteJob = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteJob(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
};
