import express from 'express';

/**
 * DATOS A MANIPULAR
 */
let frase = 'Hola mundo como estan Recurso 1';

const router = express.Router();

router.get('/leer', (req, res) => {
  res.json({
    frase,
  });
});

router.get('/leer/:pos', (req, res) => {
  const posicion = parseInt(req.params.pos);

  const palabras = frase.split(' ');
  if (posicion < 1 || posicion > palabras.length) {
    return res.status(400).json({
      error: 'El parámetro está fuera de rango',
    });
  }

  res.json({
    palabra: palabras[posicion - 1],
  });
});

router.post('/guardar', (req, res) => {
  const body = req.body;

  frase += ' ' + body.nuevaPalabra;
  res.json({
    frase,
  });
});

router.put('/actualizar/:pos', (req, res) => {
  const posicion = parseInt(req.params.pos);
  const body = req.body;

  const palabras = frase.split(' ');
  if (posicion < 1 || posicion > palabras.length) {
    return res.status(400).json({
      error: 'El parámetro está fuera de rango',
    });
  }

  palabras[posicion - 1] = body.nuevaPalabra;

  frase = palabras.join(' ');

  res.json({
    frase,
  });
});

router.delete('/borrar/:pos', (req, res) => {
  const posicion = parseInt(req.params.pos) - 1;

  const palabras = frase.split(' ');
  if (posicion < 1 || posicion > palabras.length) {
    return res.status(400).json({
      error: 'El parámetro está fuera de rango',
    });
  }

  palabras.splice(posicion, 1);

  frase = palabras.join(' ');
  res.json({
    frase,
  });
});

export default router;
