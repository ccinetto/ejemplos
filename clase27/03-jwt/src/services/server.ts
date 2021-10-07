import express from 'express';
import mainRouter from '../routes';
import path from 'path';

const app = express();

app.use(express.json());

const publicPath = path.resolve(__dirname, '../../public');
app.use(express.static(publicPath));

app.use('/api', mainRouter);

export default app;
