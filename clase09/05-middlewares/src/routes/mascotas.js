import express from 'express';

/**
 * DATOS A MANIPULAR
 */
let mascotas = [];

const router = express.Router();

const funcion5 = (req, res, next) => {
  console.log('Entrando a funcion5');
  next();
};

router.get('/listar', funcion5, (req, res) => {
  res.json({
    mascotas,
  });
});

router.post('/guardar', (req, res) => {
  const body = req.body;
  console.log(body);
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
