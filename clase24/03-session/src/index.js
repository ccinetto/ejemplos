import express from 'express';
import session from 'express-session';

const app = express();

const oneDay = 1000 * 60;

app.use(express.json());
app.use(
  session({
    secret: 'thisismysecrctekeyfhrgfgrfrty84fwir767',
    cookie: { maxAge: oneDay },
    saveUninitialized: true,
    resave: true,
  })
);
const myUser = 'pepe';
const myPassword = 'BokitaTheBiggest';

app.get('/login', (req, res) => {
  const { username, password } = req.query;
  // const body = req.body;

  if (username == myUser && password == myPassword) {
    req.session.loggedIn = true;
    req.session.contador = 1;
    req.session.admin = true;
    res.json({ msg: 'bienvenido' });
  } else res.status(401).json({ msg: 'no estas autorizado' });
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.json({ msg: 'session destruida' });
});

const validateLogIn = (req, res, next) => {
  if (req.session.loggedIn) next();
  else res.status(401).json({ msg: 'no estas autorizado' });
};

app.get('/secret-endpoint', validateLogIn, (req, res) => {
  req.session.contador++;
  res.json({
    msg: 'informacion super secreta',
    contador: req.session.contador,
  });
});

app.listen(3000, () => console.log(`Escuchando puerto 3000`));
