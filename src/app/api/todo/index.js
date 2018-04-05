import { Router } from 'express';
import {
  readAll,
  readOne,
  createOne,
  updateOne,
  deleteOne
} from './controller';

const router = new Router();
// TODO: Use middleware to authenticate and validate the quesries
router
  .route('/')
  .get(readAll)
  .post(createOne);

router
  .route('/:id')
  .get(readOne)
  .put(updateOne)
  .delete(deleteOne);

export default router;
