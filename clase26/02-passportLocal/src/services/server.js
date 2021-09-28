import express from 'express';
import mainRouter from '../routes';
import session from 'express-session';
import passport from 'passport';

const app = express();

app.use(express.json());

app.use(
  session({
    secret: 'your secret line of secretness',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', mainRouter);

export default app;
