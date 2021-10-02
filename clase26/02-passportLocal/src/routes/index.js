import { Router } from 'express';
import { isLoggedIn } from '../middlewares/auth';
import UserRouter from './user';
import passport from '../middlewares/auth';

const router = Router();

router.post('/login', passport.authenticate('login'), function (req, res) {
  res.json({ msg: 'Welcome!', user: req.user });
});

router.post('/signup', (req, res, next) => {
  passport.authenticate('signup', function (err, user, info) {
    console.log(err, user, info);
    if (err) {
      return next(err);
    }
    if (!user) return res.status(401).json({ data: info });

    res.json({ msg: 'signup OK' });
  })(req, res, next);
});

router.get('/hello', (req, res) => {
  res.json({ msg: 'HOLA', session: req.session });
});

router.use('/user', isLoggedIn, UserRouter);

export default router;
