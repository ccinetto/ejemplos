import express from 'express';
import Pepito from './routes/recurso1';
import bokitaElMasGrande from './routes/recurso2';

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * DEFINICION DE LOS ROUTERS
 */

app.use('/api/recurso1', Pepito);
app.use('/api/recurso2', bokitaElMasGrande);
