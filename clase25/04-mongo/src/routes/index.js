import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('Servidor express ok!');
});

router.get('/contador', (req, res) => {
  if (req.session.contador) {
    req.session.contador++;
    res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`);
  } else {
    req.session.contador = 1;
    res.send('Bienvenido!');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (!err) res.send('Logout ok!');
    else res.send({ status: 'Logout ERROR', body: err });
  });
});

router.get('/info', (req, res) => {
  res.send({
    session: req.session,
    sessionId: req.sessionID,
    cookies: req.cookies,
  });
});

export default router;
