import express from 'express';
import path from 'path';
import handlebars from 'express-handlebars';

const app = express();
const puerto = 8080;

const server = app.listen(puerto, () =>
  console.log('SERVER UP en puerto', puerto)
);

const publicFolderPath = path.resolve(__dirname, '../public');
app.use(express.static(publicFolderPath));

const layoutFolderPath = path.resolve(__dirname, '../views/layouts');
const defaultLayerPth = path.resolve(__dirname, '../views/layouts/index.hbs');
const partialFolderPath = path.resolve(__dirname, '../views/partial');
app.set('view engine', 'hbs');

app.engine(
  'hbs',
  handlebars({
    layoutsDir: layoutFolderPath,
    partialsDir: partialFolderPath,
    defaultLayout: defaultLayerPth,
    extname: 'hbs',
  })
);

app.get('/', (req, res) => {
  /**HACEMOS CIERTA LOGICA */
  const datosDinamicos = {
    nombre: 'Franco',
    apellido: 'Soldano',
    mostrarMercado: true,
    mostrarCosas: false,
    listaMercado: [],
    // listaMercado: [
    //   'Mate',
    //   'Cafe',
    //   'Harina',
    //   'Palmitos',
    //   'Yerba',
    //   'Mermelada',
    //   'Cacao',
    //   'Picadillo',
    // ],
    listaCosas: [
      {
        tarea: 'Hacer Cafe',
        estilo: 'toplaner',
      },
      {
        tarea: 'Beber Cafe',
        estilo: 'toplaner',
      },
      {
        tarea: 'Hacer Hamburguesas',
        estilo: 'toplaner',
      },
    ],
  };

  res.render('main', datosDinamicos);
});

app.get('/arch2', (req, res) => {
  /**HACEMOS CIERTA LOGICA */

  res.render('main', { layout: 'alternativo' });
});
