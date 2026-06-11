import { Request, Response } from 'express';
import { applicationsService } from '../applications/applications.service';
import { ApiError } from '../../utils/ApiError';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { IJobFilters } from './jobs.interface';
import { jobsService } from './jobs.service';

/**
 * POST /api/jobs (employer) — creates a job owned by the authenticated employer.
 */
const createJob = catchAsync(async (req: Request, res: Response) => {
  const job = await jobsService.createJob(req.user!._id, req.body);
  sendResponse(res, {
    statusCode: 201,
    message: 'Job posted successfully',
    data: job,
  });
});

/**
 * GET /api/jobs/my (employer) — lists only the authenticated employer's jobs.
 */
const getMyJobs = catchAsync(async (req: Request, res: Response) => {
  const jobs = await jobsService.getMyJobs(req.user!._id);
  sendResponse(res, {
    statusCode: 200,
    message: 'Your jobs fetched',
    data: jobs,
  });
});

/**
 * GET /api/jobs (public) — browse open, in-deadline jobs with filters and
 * offset pagination. Returns the paginated envelope as `data`.
 */
const getJobs = catchAsync(async (req: Request, res: Response) => {
  const { type, location, keyword, page } = req.query as unknown as IJobFilters;
  const result = await jobsService.getJobs({ type, location, keyword, page });
  sendResponse(res, {
    statusCode: 200,
    message: 'Jobs fetched',
    data: result,
  });
});

/**
 * GET /api/jobs/:id (public) — single job detail.
 */
const getJobById = catchAsync(async (req: Request, res: Response) => {
  const job = await jobsService.getJobById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    message: 'Job fetched',
    data: job,
  });
});

/**
 * PATCH /api/jobs/:id/close (employer+owner) — sets status to 'closed'.
 */
const closeJob = catchAsync(async (req: Request, res: Response) => {
  const job = await jobsService.closeJob(req.params.id, req.user!._id);
  sendResponse(res, {
    statusCode: 200,
    message: 'Job closed',
    data: job,
  });
});

/**
 * DELETE /api/jobs/:id (employer+owner) — deletes the job, but only if it has
 * no applications. Orchestration lives here, not in jobs.service, so the jobs
 * module never imports the applications module: (1) ownership is checked first
 * (403/404 take precedence and avoid leaking application counts to non-owners),
 * (2) reject with 409 if any application exists, (3) delete.
 */
const deleteJob = catchAsync(async (req: Request, res: Response) => {
  const jobId = req.params.id;
  const employerId = req.user!._id;

  await jobsService.verifyOwnership(jobId, employerId);

  const applicationCount = await applicationsService.countApplicationsForJob(jobId);
  if (applicationCount > 0) {
    throw new ApiError(409, 'Cannot delete a job that has applications');
  }

  await jobsService.deleteJob(jobId, employerId);
  sendResponse(res, {
    statusCode: 200,
    message: 'Job deleted',
    data: null,
  });
});

export const jobsController = {
  createJob,
  getMyJobs,
  getJobs,
  getJobById,
  closeJob,
  deleteJob,
};
