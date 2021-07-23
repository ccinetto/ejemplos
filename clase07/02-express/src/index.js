import express from 'express';
import path from 'path';

const puerto = 6000;

const app = express();

const server = app.listen(puerto, () =>
  console.log('Server Up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR =>', err);
});

// ENVIO DE UN HTML BASICO USANDO EXPRESS
app.get('/mihtml', (request, response) => {
  const myfilePath = path.resolve(__dirname, './views/vista1.html');
  response.sendFile(myfilePath);
});

// //RESPUESTA EN FORMATO JSON (API)
// app.get('/', (request, response) => {
//   console.log(request.query);
//   response.json({
//     msg: 'Hola Mundo desde el main',
//   });
// });

//RESPUESTA EN FORMATO JSON (API)
app.post('/api/holamundo', (request, response) => {
  response.json({
    msg: 'Hola Mundo desde /api/holamundo',
  });
});
