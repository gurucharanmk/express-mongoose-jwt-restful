import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
  res.json({
    status: 'Success'
  });
});

export default router;
