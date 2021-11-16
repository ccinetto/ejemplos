import express from 'express';
import * as http from 'http';
import mainRouter from '../routes';

const app = express();

app.use(express.json());

app.use(mainRouter);
const HTTPServer = http.createServer(app);

export default HTTPServer;
