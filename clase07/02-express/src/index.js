import express from 'express';
import path from 'path';

const puerto = 8080;

const app = express();

const server = app.listen(puerto, () =>
  console.log('Server Up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR =>', err);
});

// ENVIO DE UN HTML BASICO USANDO EXPRESS
app.get('/', (request, response) => {
  const myfilePath = path.resolve(__dirname, './views/vista1.html');
  response.sendFile(myfilePath);
});

//RESPUESTA EN FORMATO JSON (API)
app.get('/api/holamundo', (request, response) => {
  response.json({
    msg: 'Hola Mundo',
  });
});
