import { ProductosMemDAO } from './DAOs/memory';
import { ProductosFSDAO } from './DAOs/fs';
import { ProductosAtlasDAO } from './DAOs/mongo';

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
        console.log('RETORNANDO INSTANCIA CLASE FS');
        const filePath = path.resolve(__dirname, './DAOs/products.json');
        console.log(filePath);
        return new ProductosFSDAO(filePath);

      case TipoPersistencia.MongoAtlas:
        console.log('RETORNANDO INSTANCIA CLASE MONGO ATLAS');
        return new ProductosAtlasDAO();

      case TipoPersistencia.LocalMongo:
        console.log('RETORNANDO INSTANCIA CLASE MONGO LOCAL');
        return new ProductosAtlasDAO(true);

      default:
        console.log('RETORNANDO INSTANCIA CLASE MEMORIA');
        return new ProductosMemDAO();
    }
  }
}
