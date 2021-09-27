import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import mainRouter from '../routes';

const FileStore = sessionFileStore(session);

const fileStoreOptions = {
  /* ----------------------------------------------------- */
  /*           Persistencia por file store                 */
  /* ----------------------------------------------------- */
  store: new FileStore({ path: './sesiones', ttl: 300, retries: 0 }),
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
app.use(session(fileStoreOptions));

app.use('/api', mainRouter);

export default app;
