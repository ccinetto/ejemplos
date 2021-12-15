import Config from './config/index.ts';
import OakApp from './services/server.ts';
import { MongoDb } from './services/database.ts';

await OakApp.listen({ port: Config.PORT });
console.log(`Server escuchando en el puerto ${Config.PORT}`);
