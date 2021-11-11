import Config from './config';
import { MongoAtlas, MongoLocal } from './services/mongodb';
import ExpressServer from './services/server';

const db1 = MongoAtlas.getConnection();
console.log('DB ATLAS UP');

const db2 = MongoLocal.getConnection();
console.log('DB LOCAL UP');

ExpressServer.listen(Config.PORT, () => console.log('Server UP'));
