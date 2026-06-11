import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { authService } from '../auth/auth.service';
import { applicationsService } from './applications.service';

/**
 * POST /api/applications/:jobId (jobseeker) — submits an application with a
 * cover letter and optional PDF CV. Orchestrates authService to resolve the
 * seeker's email (kept out of the JWT) for the confirmation email, then defers
 * all business rules to the service.
 */
const apply = catchAsync(async (req: Request, res: Response) => {
  const seeker = await authService.getMe(req.user!._id);
  const application = await applicationsService.apply({
    jobseekerId: req.user!._id,
    jobseekerEmail: seeker.email,
    jobId: req.params.jobId,
    coverLetter: req.body.coverLetter,
    file: req.file,
  });
  sendResponse(res, {
    statusCode: 201,
    message: 'Application submitted',
    data: application,
  });
});

/**
 * GET /api/applications/my (jobseeker) — the seeker's own applications + status.
 */
const getMyApplications = catchAsync(async (req: Request, res: Response) => {
  const applications = await applicationsService.getMyApplications(req.user!._id);
  sendResponse(res, {
    statusCode: 200,
    message: 'Your applications fetched',
    data: applications,
  });
});

/**
 * GET /api/applications/job/:jobId (employer+owner) — applicants for a job the
 * employer owns. 403 if they don't own it (enforced in the service).
 */
const getApplicationsForJob = catchAsync(async (req: Request, res: Response) => {
  const applications = await applicationsService.getApplicationsForJob(
    req.params.jobId,
    req.user!._id
  );
  sendResponse(res, {
    statusCode: 200,
    message: 'Applications fetched',
    data: applications,
  });
});

/**
 * PATCH /api/applications/:id/status (employer+owner) — updates an application's
 * review status. Ownership is enforced via the application's job in the service.
 */
const updateStatus = catchAsync(async (req: Request, res: Response) => {
  const application = await applicationsService.updateStatus(
    req.params.id,
    req.user!._id,
    req.body.status
  );
  sendResponse(res, {
    statusCode: 200,
    message: 'Application status updated',
    data: application,
  });
});

export const applicationsController = {
  apply,
  getMyApplications,
  getApplicationsForJob,
  updateStatus,
};
