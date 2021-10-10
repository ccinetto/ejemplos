import Server from './services/server';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8080;

Server.listen(PORT, () =>
  console.log(
    `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
  )
);
