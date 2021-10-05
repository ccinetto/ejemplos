import express from 'express';
import { calculo } from './utils/calculo';
import { fork } from 'child_process';
import path from 'path';

const scriptPath = path.resolve(__dirname, './utils/calculo.js');

const app = express();
let visitas = 0;

app.get('/', (req, res) => {
  visitas += 1;
  res.json({
    visitas,
  });
});

app.get('/calculo', (req, res) => {
  const computo = fork(scriptPath);
  computo.send('start');
  computo.on('message', (sum) => {
    res.json({
      resultado: sum,
    });
  });
});

const puerto = 8080;

const server = app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});

server.on('error', (error) => console.log(`Error en servidor: ${error}`));
