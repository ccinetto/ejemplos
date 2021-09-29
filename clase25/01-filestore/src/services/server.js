import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import mainRouter from '../routes';

const FileStore = sessionFileStore(session);

const ttlSeconds = 5;

const fileStoreOptions = {
  store: new FileStore({ path: './sesiones', ttl: ttlSeconds, retries: 0 }),
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

const app = express();
app.use(cookieParser());
app.use(session(fileStoreOptions));

app.use('/api', mainRouter);

export default app;
