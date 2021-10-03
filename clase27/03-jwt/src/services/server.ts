import express from 'express';
import mainRouter from '../routes';
import path from 'path';
import exphbs from 'express-handlebars';

const app = express();

app.use(express.json());

const publicPath = path.resolve(__dirname, '../../public');
app.use(express.static(publicPath));

const viewsPath = path.resolve(__dirname, '../../views');
const layoutDirPath = viewsPath + '/layouts';
const defaultLayerPth = viewsPath + '/layouts/main.hbs';
const partialDirPath = viewsPath + '/partials';

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    layoutsDir: layoutDirPath,
    extname: 'hbs',
    defaultLayout: defaultLayerPth,
    partialsDir: partialDirPath,
  })
);

app.use('/api', mainRouter);

export default app;
