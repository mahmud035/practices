import { Document, Types } from 'mongoose';

export type TJobType = 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
export type TJobStatus = 'open' | 'closed';

export interface IJob extends Document {
  _id: Types.ObjectId;
  title: string;
  company: string;
  location: string;
  type: TJobType;
  description: string;
  salaryMin: number;
  salaryMax: number;
  deadline: Date;
  status: TJobStatus;
  employer: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

/** Normalised filter/pagination input for the public browse query. */
export interface IJobFilters {
  type?: TJobType;
  location?: string;
  keyword?: string;
  page: number;
}

/** Offset-pagination envelope returned by the browse endpoint. */
export interface IPaginatedJobs {
  data: IJob[];
  total: number;
  page: number;
  totalPages: number;
}
