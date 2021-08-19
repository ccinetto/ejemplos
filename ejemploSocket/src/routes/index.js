import { Router } from 'express';
import recurso1Router from './recurso1';
import recurso2Router from './recurso2';

const miRouter = Router();

miRouter.use('/recurso1', recurso1Router);
miRouter.use('/recurso2', recurso2Router);

export default miRouter;
