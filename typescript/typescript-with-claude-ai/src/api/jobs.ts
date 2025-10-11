import axios from 'axios';
import type { IJob } from '../components/JobList';
import type { ApiResponse } from '../docs/get-started--ts-for-js-programmers';

// 3. Axios with Typed Responses
export const jobsApi = {
  getAll: () => axios.get<ApiResponse<IJob[]>>('/api/jobs'),

  getById: (id: string) => axios.get<ApiResponse<IJob>>(`/api/jobs/${id}`),

  create: (data: Omit<IJob, '_id' | 'createdAt'>) =>
    axios.post<ApiResponse<IJob>>(`/api/jobs`, data),
};
