import express from 'express';
import path from 'path';
import * as http from 'http';

const app = express();

const publicFolderPath = path.resolve(__dirname, '../../public');
app.use(express.static(publicFolderPath));

app.use(express.json());

const myServer = new http.Server(app);

export default myServer;
