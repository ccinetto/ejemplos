import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mainRouter from '../routes';
import { redisClient, RedisStore } from './redis';

const StoreOptions = {
  /* ----------------------------------------------------- */
  /*           Persistencia por redis database             */
  /* ----------------------------------------------------- */
  store: new RedisStore({ client: redisClient }),
  /* ----------------------------------------------------- */

  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false /* ,
  cookie: {
      maxAge: 40000
  } */,
};

const app = express();
app.use(cookieParser());
app.use(session(StoreOptions));

app.use('/api', mainRouter);

export default app;
