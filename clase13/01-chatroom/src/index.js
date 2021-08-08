// Import Libraries
import express from 'express';
import path from 'path';
import * as http from 'http';
import { initWsServer } from './services/socket';
//Basic Config
const app = express();
const server = http.Server(app);

//Init SocketIo Server
initWsServer(server);

// listening to port...
const port = 8080;
server.listen(port, () => console.log(`Server Up port ${port}`));

// define the paths to the static files
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
