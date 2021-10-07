import { Router } from 'express';
import { isLoggedIn } from '../middlewares/auth';
import UserRouter from './user';
import authRouter from './auth';

const router = Router();

router.use('/auth', authRouter);

router.get('/hello', (req, res) => {
  res.json({ msg: 'HOLA', session: req.session });
});

router.use('/user', isLoggedIn, UserRouter);

export default router;
