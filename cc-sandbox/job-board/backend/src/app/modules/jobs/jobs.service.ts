import { Types } from 'mongoose';
import { ApiError } from '../../utils/ApiError';
import { IJob, IJobFilters, IPaginatedJobs, TJobType } from './jobs.interface';
import { Job } from './jobs.model';

const PAGE_SIZE = 10;

interface CreateJobInput {
  title: string;
  company: string;
  location: string;
  type: TJobType;
  description: string;
  salaryMin: number;
  salaryMax: number;
  deadline: Date;
}

/**
 * Creates a job owned by the given employer. Status defaults to 'open' via the
 * schema. Ownership is stamped here from the authenticated id — never trusted
 * from the request body.
 */
const createJob = async (employerId: string, input: CreateJobInput): Promise<IJob> => {
  return Job.create({ ...input, employer: new Types.ObjectId(employerId) });
};

/**
 * Returns every job owned by the employer, newest first. Scoped strictly to
 * `employerId` — this is the ownership boundary for the employer dashboard.
 */
const getMyJobs = async (employerId: string): Promise<IJob[]> => {
  return Job.find({ employer: new Types.ObjectId(employerId) }).sort({ createdAt: -1 });
};

/**
 * Public single-job fetch by id. Rejects (404) if not found. Returns the job
 * regardless of status so direct links to closed listings still resolve.
 */
const getJobById = async (jobId: string): Promise<IJob> => {
  const job = await Job.findById(jobId);
  if (!job) {
    throw new ApiError(404, 'Job not found');
  }
  return job;
};

/**
 * Public browse with filters + offset pagination. Always constrained to
 * open jobs whose deadline has not passed. Optional `type`, case-insensitive
 * `location`, and a `keyword` OR-match across title/company. Returns the
 * `{ data, total, page, totalPages }` envelope, 10 per page.
 */
const getJobs = async (filters: IJobFilters): Promise<IPaginatedJobs> => {
  const query: Record<string, unknown> = {
    status: 'open',
    deadline: { $gte: new Date() },
  };

  if (filters.type) query.type = filters.type;
  if (filters.location) query.location = { $regex: filters.location, $options: 'i' };
  if (filters.keyword) {
    query.$or = [
      { title: { $regex: filters.keyword, $options: 'i' } },
      { company: { $regex: filters.keyword, $options: 'i' } },
    ];
  }

  const page = Math.max(filters.page, 1);
  const skip = (page - 1) * PAGE_SIZE;

  const [data, total] = await Promise.all([
    Job.find(query).sort({ createdAt: -1 }).skip(skip).limit(PAGE_SIZE),
    Job.countDocuments(query),
  ]);

  return {
    data,
    total,
    page,
    totalPages: Math.ceil(total / PAGE_SIZE),
  };
};

/**
 * Ownership guard. Loads the job and asserts the caller owns it.
 * 404 when missing, 403 when owned by another employer. Returns the job so
 * callers can reuse it. This is the single source of truth for job ownership —
 * reused by close/delete here and by the applications module.
 */
const verifyOwnership = async (jobId: string, employerId: string): Promise<IJob> => {
  const job = await Job.findById(jobId);
  if (!job) {
    throw new ApiError(404, 'Job not found');
  }
  if (job.employer.toString() !== employerId) {
    throw new ApiError(403, 'You do not own this job');
  }
  return job;
};

/**
 * Applicability guard used before accepting an application: the job must exist,
 * be open, and not past its deadline. 404 when missing, 400 when not accepting
 * applications. Returns the job for downstream use (title/company for email).
 */
const verifyJobIsOpen = async (jobId: string): Promise<IJob> => {
  const job = await Job.findById(jobId);
  if (!job) {
    throw new ApiError(404, 'Job not found');
  }
  if (job.status !== 'open' || job.deadline.getTime() < Date.now()) {
    throw new ApiError(400, 'This job is no longer accepting applications');
  }
  return job;
};

/**
 * Closes a job the employer owns (status -> 'closed'). Does not delete it.
 * Idempotent at the data level. Returns the updated job.
 */
const closeJob = async (jobId: string, employerId: string): Promise<IJob> => {
  const job = await verifyOwnership(jobId, employerId);
  job.status = 'closed';
  await job.save();
  return job;
};

/**
 * Deletes a job the employer owns. Ownership-only here — the "reject if
 * applications exist" (409) guard is orchestrated in the controller, which
 * sequences applicationsService + this. Keeps deps one-directional.
 */
const deleteJob = async (jobId: string, employerId: string): Promise<void> => {
  await verifyOwnership(jobId, employerId);
  await Job.findByIdAndDelete(jobId);
};

export const jobsService = {
  createJob,
  getMyJobs,
  getJobById,
  getJobs,
  verifyOwnership,
  verifyJobIsOpen,
  closeJob,
  deleteJob,
};
