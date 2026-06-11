import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ApiResponse } from '../../lib/api';
import api from '../../lib/axios';
import { CreateJobPayload, Job, JobFilters, PaginatedJobs } from './jobs.types';

const JOBS_KEY = 'jobs';
const MY_JOBS_KEY = 'my-jobs';

/** Public browse with filters + offset pagination. */
export function useJobs(filters: JobFilters) {
  return useQuery({
    queryKey: [JOBS_KEY, filters],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (filters.type) params.set('type', filters.type);
      if (filters.location) params.set('location', filters.location);
      if (filters.keyword) params.set('keyword', filters.keyword);
      params.set('page', String(filters.page));
      const { data } = await api.get<ApiResponse<PaginatedJobs>>(`/jobs?${params}`);
      return data.data;
    },
  });
}

/** Single public job detail. */
export function useJob(id: string) {
  return useQuery({
    queryKey: [JOBS_KEY, id],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<Job>>(`/jobs/${id}`);
      return data.data;
    },
    enabled: Boolean(id),
  });
}

/** The authenticated employer's own listings. */
export function useMyJobs() {
  return useQuery({
    queryKey: [MY_JOBS_KEY],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<Job[]>>('/jobs/my');
      return data.data;
    },
  });
}

export function useCreateJob() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: CreateJobPayload) => {
      const { data } = await api.post<ApiResponse<Job>>('/jobs', payload);
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [MY_JOBS_KEY] });
      queryClient.invalidateQueries({ queryKey: [JOBS_KEY] });
    },
  });
}

export function useCloseJob() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { data } = await api.patch<ApiResponse<Job>>(`/jobs/${id}/close`);
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [MY_JOBS_KEY] });
      queryClient.invalidateQueries({ queryKey: [JOBS_KEY] });
    },
  });
}

export function useDeleteJob() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/jobs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [MY_JOBS_KEY] });
      queryClient.invalidateQueries({ queryKey: [JOBS_KEY] });
    },
  });
}
