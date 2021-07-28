import express from 'express';

/**
 * DATOS A MANIPULAR
 */
let frase = 'Hola mundo como estan';

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});

/**
 * DEFINICION RUTAS BASICAS
 */

app.get('/api/getFrase', (req, res) => {
  res.json({
    data: frase,
  });
});

app.get('/api/getLetra/:num', (req, res) => {
  const numeroLetra = parseInt(req.params.num);

  if (numeroLetra < 0 || numeroLetra > frase.length) {
    return res.status(400).json({
      error: 'El parámetro está fuera de rango',
    });
  }

  res.json({
    data: frase[numeroLetra],
  });
});

app.get('/api/getPalabra/:num', (req, res) => {
  const numeroPalabra = parseInt(req.params.num);
  const palabras = frase.split(' ');

  if (numeroPalabra < 0 || numeroPalabra > palabras.length) {
    return res.status(400).json({
      error: 'El parámetro está fuera de rango',
    });
  }

  res.json({
    data: palabras[numeroPalabra],
  });
});
