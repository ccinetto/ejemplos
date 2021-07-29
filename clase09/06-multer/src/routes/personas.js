import express from 'express';

/**
 * DATOS A MANIPULAR
 */
let personas = [];

const router = express.Router();

router.get('/listar', (req, res) => {
  res.json({
    personas,
  });
});

router.post('/guardar', (req, res) => {
  const body = req.body;

  const nuevaPersona = {
    nombre: body.nombre,
    apellido: body.apellido,
    edad: body.edad,
  };

  personas.push(nuevaPersona);
  res.json({
    nuevaPersona,
  });
});

export default router;
