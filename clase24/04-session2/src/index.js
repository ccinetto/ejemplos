import express from 'express';
import session from 'express-session';

const app = express();

const oneDay = 1000 * 60 * 60 * 24;
app.use(
  session({
    secret: 'thisismysecrctekeyfhrgfgrfrty84fwir767',
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: true,
  })
);

app.get('/', (req, res) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
  res.json(req.session);
});

app.get('/destroy', (req, res) => {
  req.session.destroy();
  res.json({ msg: 'session destruida' });
});

app.listen(3000, () => console.log(`Escuchando puerto 3000`));
