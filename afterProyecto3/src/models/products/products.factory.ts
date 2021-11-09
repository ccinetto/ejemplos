import { ProductosMemDAO } from './DAOs/memory';
import { ProductosFSDAO } from './DAOs/fs';
import { ProductosAtlasDAO } from './DAOs/mongo';
import { Logger } from '../../services/logger';
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
      case TipoPersistencia.FileSystem:
        Logger.info('Retornando Instancia Products FS');
        const filePath = path.resolve(__dirname, './DAOs/products.json');
        return new ProductosFSDAO(filePath);

      case TipoPersistencia.MongoAtlas:
        Logger.info('Retornando Instancia Products Mongo Atlas');
        return new ProductosAtlasDAO();

      case TipoPersistencia.LocalMongo:
        Logger.info('Retornando Instancia Products Mongo Local');
        return new ProductosAtlasDAO(true);

      default:
        Logger.info('Retornando Instancia Products Default');
        return new ProductosMemDAO();
    }
  }
}
