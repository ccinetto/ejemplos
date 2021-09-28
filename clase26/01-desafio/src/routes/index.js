import { Router } from 'express';
import path from 'path';

const router = Router();

const publicPath = path.resolve(__dirname, '../../public');

let usuarios = [
  { nombre: 'pepe', password: 'bokitaTheBiggest' },
  { nombre: 'jacinto', password: 'mipassword123' },
];

router.get('/', (req, res) => {
  if (req.session.nombre) {
    res.redirect('/datos');
  } else {
    res.redirect('/login');
  }
});

/* --------- LOGIN ---------- */
router.get('/login', (req, res) => {
  res.sendFile(publicPath + '/login.html');
});

router.post('/login', (req, res) => {
  let { nombre, password } = req.body;
  //console.log(usuarios)
  //console.log(req.body)
  let credencialesOk = usuarios.filter(
    (usuario) => usuario.nombre == nombre && usuario.password == password
  ).length;
  if (credencialesOk) {
    req.session.nombre = nombre;
    req.session.contador = 0;
    res.redirect('/');
  } else {
    res.render('login-error', {});
  }
});

/* --------- REGISTER ---------- */
router.get('/register', (req, res) => {
  const registerPath = path.resolve(__dirname, '../public/register.html');
  res.sendFile(publicPath + '/register.html');
});

router.post('/register', (req, res) => {
  let { nombre } = req.body;
  let encontrado = usuarios.filter(
    (usuario) => usuario.nombre == nombre
  ).length;
  if (!encontrado) {
    usuarios.push(req.body);
    req.session.nombre = nombre;
    req.session.contador = 0;
    res.redirect('/');
  } else {
    res.render('register-error', {});
  }
});

/* --------- DATOS ---------- */
router.get('/datos', (req, res) => {
  if (req.session.nombre) {
    req.session.contador++;
    res.render('datos', {
      datos: usuarios.find((usuario) => usuario.nombre == req.session.nombre),
      contador: req.session.contador,
    });
  } else {
    res.redirect('/login');
  }
});

/* --------- LOGOUT ---------- */
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/');
  });
});

export default router;
