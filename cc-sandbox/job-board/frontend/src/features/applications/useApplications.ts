import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ApiResponse } from '../../lib/api';
import api from '../../lib/axios';
import {
  ApplicationStatus,
  ApplyPayload,
  JobApplication,
  MyApplication,
} from './applications.types';

const MY_APPLICATIONS_KEY = 'my-applications';
const JOB_APPLICATIONS_KEY = 'job-applications';

/** Submit an application (cover letter + optional PDF CV) as multipart. */
export function useApply() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ jobId, coverLetter, cv }: ApplyPayload) => {
      const formData = new FormData();
      formData.append('coverLetter', coverLetter);
      if (cv) formData.append('cv', cv);
      const { data } = await api.post<ApiResponse<MyApplication>>(
        `/applications/${jobId}`,
        formData
      );
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [MY_APPLICATIONS_KEY] });
    },
  });
}

/** The authenticated seeker's own applications + current status. */
export function useMyApplications() {
  return useQuery({
    queryKey: [MY_APPLICATIONS_KEY],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<MyApplication[]>>('/applications/my');
      return data.data;
    },
  });
}

/** Applicants for a job the authenticated employer owns. */
export function useJobApplications(jobId: string) {
  return useQuery({
    queryKey: [JOB_APPLICATIONS_KEY, jobId],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<JobApplication[]>>(`/applications/job/${jobId}`);
      return data.data;
    },
    enabled: Boolean(jobId),
  });
}

export function useUpdateApplicationStatus(jobId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, status }: { id: string; status: ApplicationStatus }) => {
      const { data } = await api.patch<ApiResponse<JobApplication>>(
        `/applications/${id}/status`,
        { status }
      );
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [JOB_APPLICATIONS_KEY, jobId] });
    },
  });
}
