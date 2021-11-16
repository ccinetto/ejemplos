import { Router } from 'express';
import { userRouter } from './usuarios';

const mainRouter = Router();

mainRouter.use('/usuarios', userRouter);

export default mainRouter;
