import express from 'express';
import { PeopleController } from '../controller/15-controller.mjs';

const router = express.Router();

router.get('/', PeopleController.getPeople);
router.post('/', PeopleController.createPerson);
router.post('/postman', PeopleController.createPersonPostman);
router.put('/:id', PeopleController.updatePerson);
router.delete('/:id', PeopleController.deletePerson);

// router
//   .route('/')
//   .get(PeopleController.getPeople)
//   .post(PeopleController.createPerson);
// router.route('/postman').post(PeopleController.createPersonPostman);
// router
//   .route('/:id')
//   .put(PeopleController.updatePerson)
//   .delete(PeopleController.deletePerson);

export const PeopleRoutes = router;
