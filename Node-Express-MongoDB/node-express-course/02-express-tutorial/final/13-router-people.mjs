import express from 'express';
import {
  createPerson,
  createPersonPostman,
  deletePerson,
  getPeople,
  updatePerson,
} from './15-router-controller.mjs';

const router = express.Router();

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

export default router;
