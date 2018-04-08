import { Router } from 'express';
import todo from './todo';

const router = new Router();
router.use('/todo', todo);

export default router;
