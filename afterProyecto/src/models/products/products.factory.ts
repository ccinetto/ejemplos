import { ProductosMemDAO } from './DAOs/memory';
import { ProductosFSDAO } from './DAOs/fs';
import path from 'path';
export enum TipoPersistencia {
  Memoria = 'MEM',
  FileSystem = 'FS',
  MYSQL = 'MYSQL',
  SQLITE3 = 'SQLITE3',
  LocalMongo = 'LOCAL-MONGO',
  MongoAtlas = 'MONGO-ATLAS',
  Firebase = 'FIREBASE',
}

export class NoticiasFactoryDAO {
  static get(tipo: TipoPersistencia) {
    switch (tipo) {
      case 'FS':
        const filePath = path.resolve(__dirname, './DAOs/products.json');
        return new ProductosFSDAO(filePath);
      //   case 'MYSQL':
      //     return new NoticiasFileDAO(process.cwd() + '/noticias.json');
      //   case 'MYSQL':
      //     return new NoticiasDBMongo('mibase', 'noticias');
      default:
        return new ProductosMemDAO();
    }
  }
}
