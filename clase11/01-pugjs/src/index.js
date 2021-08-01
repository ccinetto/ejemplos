import express from 'express';
import path from 'path';

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine', 'pug');
const viewsPath = path.resolve(__dirname, '../views');
app.set('views', viewsPath);

app.get('/hello', (req, res) => {
  res.render('hello.pug', { mensaje: 'HOLA MUNDO' }); // Se muestra la plantilla hello.pug
});

app.get('/eje2', (req, res) => {
  const datos = {
    titulo: 'Ejemplo Numero 2',
  };
  res.render('ejemplo2.pug', datos); // Se muestra la plantilla hello.pug
});

const datosGenericos = {
  miarraydeInfo: ['mate', 'cafe', 'harina', 'palmitos'],
  mostrarLista2: true,
  listaObjetos: [
    {
      name: 'yerba',
      style: 'toplaner',
    },
    {
      name: 'mermelada',
      style: 'midlaner',
    },
    {
      name: 'cacao',
      style: 'toplaner',
    },
    {
      name: 'picadillo',
      style: 'midlaner',
    },
  ],
};

app.get('/eje3', (req, res) => {
  res.render('ejemplo3.pug', datosGenericos); // Se muestra la plantilla hello.pug
});

app.get('/eje4', (req, res) => {
  res.render('ejemplo4.pug', datosGenericos); // Se muestra la plantilla hello.pug
});
