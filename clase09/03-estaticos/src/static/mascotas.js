import express from 'express';

/**
 * DATOS A MANIPULAR
 */
let mascotas = [];

const router = express.Router();

router.get('/listar', (req, res) => {
  res.json({
    mascotas,
  });
});

router.post('/guardar', (req, res) => {
  const body = req.body;

  const nuevaMascota = {
    nombre: body.nombre,
    raza: body.raza,
    edad: body.edad,
  };

  mascotas.push(nuevaMascota);
  res.json({
    nuevaMascota,
  });
});

export default router;
