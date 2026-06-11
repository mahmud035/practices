export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
export type JobStatus = 'open' | 'closed';

export const JOB_TYPES: JobType[] = ['Full-time', 'Part-time', 'Contract', 'Remote'];

export interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  description: string;
  salaryMin: number;
  salaryMax: number;
  deadline: string;
  status: JobStatus;
  employer: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedJobs {
  data: Job[];
  total: number;
  page: number;
  totalPages: number;
}

export interface JobFilters {
  type?: JobType;
  location?: string;
  keyword?: string;
  page: number;
}

export interface CreateJobPayload {
  title: string;
  company: string;
  location: string;
  type: JobType;
  description: string;
  salaryMin: number;
  salaryMax: number;
  deadline: string;
}
