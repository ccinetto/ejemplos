import { Router } from 'express';

const miRouter = Router();

miRouter.get('/', (req, res) => {
  res.json({
    msg: 'LLAMADO GET RECURSO 1',
  });
});

export default miRouter;
