import { Router } from 'express';
import {
  readAll,
  readOne,
  createOne,
  updateOne,
  deleteOne
} from './controller';
import validate from '../../services/validators';
import { validateBody, validateParam } from './request.rules';

const router = new Router();
router
  .route('/')
  .get(readAll)
  .post(validate(validateBody), createOne);

router
  .route('/:id')
  .get(validate(validateParam), readOne)
  .put(validate(validateParam), validate(validateBody), updateOne)
  .delete(validate(validateParam), deleteOne);

export default router;
