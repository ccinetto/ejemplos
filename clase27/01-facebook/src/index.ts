import Config from './config';
import { connectDb } from './services/db';
import Server from './services/server';

const PORT = Config.PORT;

connectDb().then(() => {
  console.log('DB CONECTADA');
  const server = Server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });

  server.on('error', (error) => console.log(`Error en servidor: ${error}`));
});
