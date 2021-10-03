import { Router } from 'express';
import { isLoggedIn } from '../middlewares/auth';
import passport from '../middlewares/auth';
import UserRouter from './user';

const router = Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/auth/twitter', passport.authenticate('twitter'));

router.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/api/datos',
    failureRedirect: '/api/fail',
  })
);

router.get('/fail', (req, res) => {
  res.render('login-error');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/api/login');
});

router.use('/user', isLoggedIn, UserRouter);

type Photos = {
  value: string;
};

type Emails = {
  value: string;
};

interface User extends Express.User {
  contador?: number;
  displayName?: string;
  photos?: Photos[];
  emails?: Emails[];
}

router.get('/datos', (req, res) => {
  let foto = 'noPhoto';
  let email = 'noEmail';

  if (req.isAuthenticated()) {
    const userData: User = req.user;
    //reinicio contador
    if (!userData.contador) userData.contador = 0;
    userData.contador++;

    if (userData.photos) foto = userData.photos[0].value;

    if (userData.emails) email = userData.emails[0].value;

    res.render('datos', {
      nombre: userData.displayName,
      contador: userData.contador,
      foto,
      email,
    });
  } else {
    res.redirect('/api/login');
  }
});

export default router;
