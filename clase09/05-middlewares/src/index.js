import express from 'express';
import path from 'path';
import routerMascotas from './routes/mascotas.js';
import routerPersonas from './routes/personas.js';

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const funcion1 = (req, res, next) => {
  console.log('Entrando a funcion1');
  next();
};

const funcion2 = (req, res, next) => {
  console.log('Entrando a funcion2');
  next();
};

const funcion3 = (req, res, next) => {
  console.log('Entrando a funcion3');
  next();
};

const funcion4 = (req, res, next) => {
  consoe.log('Entrando a funcion4');
  next();
};

app.use(funcion1);
app.use(funcion2);
app.use('/api/mascotas', funcion3, routerMascotas);
app.use('/api/personas', funcion4, routerPersonas);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({ msg: 'Something broke!', err: err.message });
});
