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

app.get('/api/leer', (req, res) => {
  res.json({
    frase,
  });
});

app.get('/api/leer/:pos', (req, res) => {
  const posicion = parseInt(req.params.pos);

  const palabras = frase.split(' ');
  if (posicion < 1 || posicion > palabras.length) {
    res.status = 400;
    return res.json({
      error: 'El parámetro está fuera de rango',
    });
  }

  res.json({
    palabra: palabras[posicion - 1],
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/guardar', (req, res) => {
  const body = req.body;

  frase += ' ' + body.nuevaPalabra;
  res.json({
    frase,
  });
});

app.put('/api/actualizar/:pos', (req, res) => {
  const posicion = parseInt(req.params.pos);
  const body = req.body;

  const palabras = frase.split(' ');
  if (posicion < 1 || posicion > palabras.length) {
    res.status = 400;
    return res.json({
      error: 'El parámetro está fuera de rango',
    });
  }

  palabras[posicion - 1] = body.nuevaPalabra;

  frase = palabras.join(' ');

  res.json({
    frase,
  });
});

function removeItemOnce(arr, index) {
  // var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

app.delete('/api/borrar/:pos', (req, res) => {
  const posicion = parseInt(req.params.pos) - 1;

  const palabras = frase.split(' ');
  if (posicion < 1 || posicion > palabras.length) {
    res.status = 400;
    return res.json({
      error: 'El parámetro está fuera de rango',
    });
  }

  palabras.splice(posicion, 1);

  frase = palabras.join(' ');
  res.json({
    frase,
  });
});
