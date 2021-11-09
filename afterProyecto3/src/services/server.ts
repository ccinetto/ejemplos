import Config from '../config';
import express, { ErrorRequestHandler } from 'express';
import path from 'path';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import * as http from 'http';
import passport from '../middleware/admin';
import apiRouter from '../routes/index';
import { Logger } from './logger';
import { loggers } from 'winston';

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: Config.MONGO_ATLAS_SRV,
  }),

  secret: Config.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: Config.SESSION_COOKIE_TIMEOUT_MIN * 60 * 1000,
  },
};

const app = express();

app.use(session(StoreOptions));

const publicFolderPath = path.resolve(__dirname, '../../public');
app.use(express.static(publicFolderPath));

app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  Logger.info(`REQ.USER ===> ${JSON.stringify(req.user)}`);
  next();
});
app.use('/api', apiRouter);

//https://stackoverflow.com/questions/50218878/typescript-express-error-function
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  Logger.error(`HUBO UN ERROR ${err.message}`);
  res.status(500).json({
    err: err.message,
  });
};

app.use(errorHandler);

const myServer = new http.Server(app);

export default myServer;
