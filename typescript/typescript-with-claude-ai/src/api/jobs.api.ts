import axios from 'axios';
import type { IJob } from '../components/JobList';
import type { ApiResponse } from '../docs/get-started--ts-for-js-programmers';

export const getJobs = async () => {
  const { data } = await axios.get<ApiResponse<IJob[]>>('/api/jobs');
  return data.data;
};

export const createJob = async (jobData: IJob) => {
  const { data } = await axios.post<ApiResponse<IJob>>(`/api/jobs`, jobData);
  return data.data;
};

export const deleteJob = async (id: string) => {
  const { data } = await axios.delete(`/api/jobs/${id}`);
  return data;
};

// 3. Axios with Typed Responses
export const jobsApi = {
  getAll: () => axios.get<ApiResponse<IJob[]>>('/api/jobs'),

  getById: (id: string) => axios.get<ApiResponse<IJob>>(`/api/jobs/${id}`),

  create: (data: Omit<IJob, '_id' | 'createdAt'>) =>
    axios.post<ApiResponse<IJob>>(`/api/jobs`, data),
};
