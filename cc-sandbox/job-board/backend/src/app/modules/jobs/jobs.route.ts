import { Router } from 'express';
import authenticate from '../../middlewares/authenticate';
import authorizeRole from '../../middlewares/authorizeRole';
import validateRequest from '../../middlewares/validateRequest';
import { jobsController } from './jobs.controller';
import { jobsValidation } from './jobs.validation';

const router = Router();

// Employer-only writes
router.post(
  '/',
  authenticate,
  authorizeRole('employer'),
  validateRequest(jobsValidation.createJobSchema),
  jobsController.createJob
);
router.get('/my', authenticate, authorizeRole('employer'), jobsController.getMyJobs);
router.patch('/:id/close', authenticate, authorizeRole('employer'), jobsController.closeJob);
router.delete('/:id', authenticate, authorizeRole('employer'), jobsController.deleteJob);

// Public reads (registered after /my so the literal path wins over :id)
router.get('/', validateRequest(jobsValidation.browseJobsSchema), jobsController.getJobs);
router.get('/:id', jobsController.getJobById);

export const jobsRoutes = router;
