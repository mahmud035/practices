import { Router } from 'express';
import multer from 'multer';
import authenticate from '../../middlewares/authenticate';
import authorizeRole from '../../middlewares/authorizeRole';
import validateRequest from '../../middlewares/validateRequest';
import { applicationsController } from './applications.controller';
import { applicationsValidation } from './applications.validation';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

// Job seeker
router.post(
  '/:jobId',
  authenticate,
  authorizeRole('jobseeker'),
  upload.single('cv'), // parse multipart before validation so coverLetter is present
  validateRequest(applicationsValidation.applySchema),
  applicationsController.apply
);
router.get('/my', authenticate, authorizeRole('jobseeker'), applicationsController.getMyApplications);

// Employer (ownership enforced in the service)
router.get(
  '/job/:jobId',
  authenticate,
  authorizeRole('employer'),
  applicationsController.getApplicationsForJob
);
router.patch(
  '/:id/status',
  authenticate,
  authorizeRole('employer'),
  validateRequest(applicationsValidation.updateStatusSchema),
  applicationsController.updateStatus
);

export const applicationsRoutes = router;
