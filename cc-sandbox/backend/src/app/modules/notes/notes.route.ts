import { Router } from 'express';
import { notesController } from './notes.controller';
import { notesValidation } from './notes.validation';
import { validateRequest } from '../../middlewares/validateRequest';
import { authenticate } from '../../middlewares/authenticate';

const router = Router();

router.use(authenticate);

router.get('/', notesController.getAll);
router.post('/', validateRequest(notesValidation.create), notesController.create);
router.get('/:id', validateRequest(notesValidation.byId), notesController.getOne);
router.put('/:id', validateRequest(notesValidation.update), notesController.update);
router.delete('/:id', validateRequest(notesValidation.byId), notesController.remove);

export const notesRouter = router;
