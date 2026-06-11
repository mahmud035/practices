import { JobStatus } from '../jobs/jobs.types';

export type ApplicationStatus = 'pending' | 'reviewed' | 'rejected';

export const APPLICATION_STATUSES: ApplicationStatus[] = ['pending', 'reviewed', 'rejected'];

/** Job fields populated onto a seeker's own application. */
export interface PopulatedJobRef {
  _id: string;
  title: string;
  company: string;
  status: JobStatus;
}

/** Seeker fields populated onto an employer's applicant list. */
export interface PopulatedSeekerRef {
  _id: string;
  name: string;
  email: string;
}

export interface MyApplication {
  _id: string;
  job: PopulatedJobRef;
  coverLetter: string;
  cvUrl?: string;
  status: ApplicationStatus;
  createdAt: string;
}

export interface JobApplication {
  _id: string;
  jobseeker: PopulatedSeekerRef;
  coverLetter: string;
  cvUrl?: string;
  status: ApplicationStatus;
  createdAt: string;
}

export interface ApplyPayload {
  jobId: string;
  coverLetter: string;
  cv?: File;
}
