import { UsuariosAtlasDAO } from './DAOs/mongo';
import path from 'path';
import { Logger } from '../../services/logger';

export enum TipoPersistencia {
  Memoria = 'MEM',
  FileSystem = 'FS',
  MYSQL = 'MYSQL',
  SQLITE3 = 'SQLITE3',
  LocalMongo = 'LOCAL-MONGO',
  MongoAtlas = 'MONGO-ATLAS',
  Firebase = 'FIREBASE',
}

export class UserFactoryDAO {
  static get(tipo: TipoPersistencia) {
    switch (tipo) {
      case TipoPersistencia.MongoAtlas:
        Logger.info('Retornando Instancia Users Mongo Atlas');
        return new UsuariosAtlasDAO();

      case TipoPersistencia.LocalMongo:
        Logger.info('Retornando Instancia Users Mongo Local');
        return new UsuariosAtlasDAO(true);

      default:
        Logger.info('Retornando Instancia Users Default');
        return new UsuariosAtlasDAO();
    }
  }
}
