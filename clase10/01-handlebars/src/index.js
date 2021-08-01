import express from 'express';
import path from 'path';
import handlebars from 'express-handlebars';

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

const layoutDirPath = path.resolve(__dirname, '../views/layouts');
const defaultLayerPth = path.resolve(__dirname, '../views/layouts/index.hbs');

const partialDirPath = path.resolve(__dirname, '../views/partials');
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars({
    layoutsDir: layoutDirPath,
    extname: 'hbs',
    defaultLayout: defaultLayerPth,
    partialsDir: partialDirPath,
  })
);

server.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

const dinamicData = {
  nombre: 'Franco',
  apellido: 'Soldano',
  mostrarLista: false,
  listaSuper: ['mate', 'cafe', 'harina', 'palmitos'],
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

app.get('/', (req, res) => {
  res.render('main', dinamicData);
});
