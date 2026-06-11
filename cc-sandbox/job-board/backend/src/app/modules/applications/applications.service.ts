import { UploadApiResponse } from 'cloudinary';
import { Readable } from 'stream';
import cloudinary from '../../../config/cloudinary';
import { ApiError } from '../../utils/ApiError';
import sendEmail from '../../utils/sendEmail';
import { jobsService } from '../jobs/jobs.service';
import { IApplication, TApplicationStatus } from './applications.interface';
import { Application } from './applications.model';

const CV_FOLDER = 'clients/mahmud/job-board/cvs';

interface ApplyInput {
  jobseekerId: string;
  jobseekerEmail: string;
  jobId: string;
  coverLetter: string;
  file?: Express.Multer.File;
}

/**
 * Streams a PDF buffer into Cloudinary under the project CV folder and resolves
 * with the upload result. `resource_type: 'auto'` lets Cloudinary classify the
 * PDF; only secure_url + public_id are persisted on the application.
 */
const uploadCvToCloudinary = (buffer: Buffer): Promise<UploadApiResponse> =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: CV_FOLDER, resource_type: 'auto' },
      (error, result) => {
        if (error || !result) {
          return reject(error ?? new Error('Cloudinary upload returned no result'));
        }
        resolve(result);
      }
    );
    Readable.from(buffer).pipe(stream);
  });

/**
 * Submits an application for a job seeker.
 *
 * Order of enforcement: (1) the job must exist, be open, and in-deadline
 * (jobsService.verifyJobIsOpen — the only cross-module call); (2) reject a
 * second application from the same seeker with 409; (3) if a CV is attached it
 * must be a PDF, then it's uploaded to Cloudinary; (4) persist; (5) fire a
 * confirmation email fire-and-forget so a mail failure never fails the request.
 */
const apply = async (input: ApplyInput): Promise<IApplication> => {
  const job = await jobsService.verifyJobIsOpen(input.jobId);

  const existing = await Application.findOne({
    job: input.jobId,
    jobseeker: input.jobseekerId,
  });
  if (existing) {
    throw new ApiError(409, 'You have already applied to this job');
  }

  let cvUrl: string | undefined;
  let cvPublicId: string | undefined;

  if (input.file) {
    if (input.file.mimetype !== 'application/pdf') {
      throw new ApiError(400, 'CV must be a PDF file');
    }
    const uploaded = await uploadCvToCloudinary(input.file.buffer);
    cvUrl = uploaded.secure_url;
    cvPublicId = uploaded.public_id;
  }

  const application = await Application.create({
    job: input.jobId,
    jobseeker: input.jobseekerId,
    coverLetter: input.coverLetter,
    cvUrl,
    cvPublicId,
  });

  // Fire-and-forget — failure is logged, never surfaced to the HTTP response.
  void sendEmail({
    to: input.jobseekerEmail,
    subject: `Application received: ${job.title} at ${job.company}`,
    text: `Your application for ${job.title} at ${job.company} has been received.`,
  }).catch((err) => console.error('[email failed]', err));

  return application;
};

/**
 * Returns the seeker's own applications, newest first, with the job's title,
 * company, and status populated for display. Scoped strictly to `jobseekerId`.
 */
const getMyApplications = async (jobseekerId: string): Promise<IApplication[]> =>
  Application.find({ jobseeker: jobseekerId })
    .populate('job', 'title company status')
    .sort({ createdAt: -1 });

/**
 * Returns all applications for a job — but only if the requesting employer owns
 * it. Ownership is enforced via jobsService.verifyOwnership (403 for another
 * employer's job, 404 if missing) BEFORE any application data is read.
 */
const getApplicationsForJob = async (
  jobId: string,
  employerId: string
): Promise<IApplication[]> => {
  await jobsService.verifyOwnership(jobId, employerId);
  return Application.find({ job: jobId })
    .populate('jobseeker', 'name email')
    .sort({ createdAt: -1 });
};

/**
 * Updates an application's status. The employer must own the job the
 * application targets — ownership is re-derived from the application's job and
 * checked via jobsService.verifyOwnership (404/403). Returns the updated doc.
 */
const updateStatus = async (
  applicationId: string,
  employerId: string,
  status: TApplicationStatus
): Promise<IApplication> => {
  const application = await Application.findById(applicationId);
  if (!application) {
    throw new ApiError(404, 'Application not found');
  }

  await jobsService.verifyOwnership(application.job.toString(), employerId);

  application.status = status;
  await application.save();
  return application;
};

/**
 * Counts applications attached to a job. Consumed by the delete-job controller
 * to enforce the 409 "cannot delete a job with applications" rule — keeping the
 * jobs module free of any applications import.
 */
const countApplicationsForJob = async (jobId: string): Promise<number> =>
  Application.countDocuments({ job: jobId });

export const applicationsService = {
  apply,
  getMyApplications,
  getApplicationsForJob,
  updateStatus,
  countApplicationsForJob,
};
