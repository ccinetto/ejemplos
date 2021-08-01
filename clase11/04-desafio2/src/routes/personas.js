import express from 'express';

/**
 * DATOS A MANIPULAR
 */
export let personas = [];

export const personasRouter = express.Router();

personasRouter.post('/guardar', (req, res) => {
  const body = req.body;

  const nuevaPersona = {
    nombre: body.nombre,
    apellido: body.apellido,
    edad: body.edad,
  };

  personas.push(nuevaPersona);
  res.render('index', { personas });
});
