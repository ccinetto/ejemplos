import express from 'express';
import * as http from 'http';
import mainRouter from '../routes';
import path from 'path';
import { Logger } from './logger';

import { ErrorRequestHandler } from 'express';
const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine', 'pug');
const viewsPath = path.resolve(__dirname, '../../views');
app.set('views', viewsPath);

app.use(express.json());

app.use('/api', mainRouter);

app.use((req, res) => {
  res.status(404).json({
    msg: 'Ruta no encontrada',
  });
});

//https://stackoverflow.com/questions/50218878/typescript-express-error-function
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  Logger.error(`HUBO UN ERROR ${err.message}`);
  res.status(500).json({
    err: err.message,
  });
};

app.use(errorHandler);

const HTTPServer = http.createServer(app);

export default HTTPServer;
