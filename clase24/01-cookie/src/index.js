import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

const mySecret = 'mySecret';
app.use(cookieParser(mySecret));
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req.cookies.signed);
  const mensage = req.cookies.idioma == 'ingles' ? 'Hello!' : 'Hola papa!';
  res.send({ msg: mensage });
});

app.get('/set', (req, res) => {
  res.cookie('idioma', 'ingles').json({ msg: 'OK' });
});

app.get('/set2', (req, res) => {
  try {
    res.cookie('server2', 'express2').send({ msg: 'OK' });
  } catch (err) {
    res.send(err);
  }
});

app.get('/set3', (req, res) => {
  res.cookie('server3', 'express3').send({ msg: 'OK' });
});

app.get('/get', (req, res) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send({
    cookies: req.cookies,
    signedCookies: req.signedCookies,
  });
});

app.get('/clr', (req, res) => {
  const cookies = req.cookies;

  console.log(cookies);

  const keys = Object.keys(cookies);

  keys.forEach((aKey) => res.clearCookie(aKey));

  res.send({ msg: 'Cookie Clear' });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});
