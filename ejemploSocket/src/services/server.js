import express from 'express';
import path from 'path';
import handlebars from 'express-handlebars';
import * as http from 'http';
import { socketService } from './socket';
import mainRouter from '../routes/index';

const app = express();

const myHTTPServer = http.Server(app);

socketService.initWsService(myHTTPServer);

const layoutPath = path.resolve(__dirname, '../../views/layouts');

/** DISPONIBILIZAR CARPETA PUBLIC */

const publicFolder = path.resolve(__dirname, '../../public');
app.use(express.static(publicFolder));

/** HBS SETTINGS */

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars({
    layoutsDir: layoutPath,
    extname: 'hbs',
  })
);

app.use(express.json());
app.use('/api', mainRouter);

app.get('/', (req, res) => {
  res.render('main', { layout: 'index' });
});

export default myHTTPServer;
