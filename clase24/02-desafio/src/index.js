import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

const mySecret = 'mySecret';
app.use(cookieParser());
app.use(express.json());

app.get('/set-cookie', (req, res) => {
  let { nombre, valor, tiempo } = req.query;
  console.log(nombre, valor, tiempo);

  if (nombre && valor) {
    if (tiempo)
      res
        .cookie(nombre, valor, { maxAge: parseInt(tiempo) })
        .send({ proceso: 'ok' });
    else res.cookie(nombre, valor).send({ proceso: 'ok' });
  } else {
    res.send({ error: 'set-cookie: falta nombre ó valor' });
  }
});

app.get('/clear-cookie', (req, res) => {
  let { nombre } = req.query;
  console.log(nombre);
  if (nombre) {
    res.clearCookie(nombre).send({ proceso: 'ok' });
  } else {
    res.send({ error: 'clear-cookie: falta nombre' });
  }
});

app.get('/get-cookies', (req, res) => {
  res.send(req.cookies);
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});
