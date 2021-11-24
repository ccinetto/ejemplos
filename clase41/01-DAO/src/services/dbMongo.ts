/* eslint-disable no-console */
import Config from '../config';
import mongoose from 'mongoose';
import DbClient from './dbClient';

export class MyMongoClient extends DbClient {
  connected: boolean;
  client: mongoose.Mongoose;

  constructor() {
    super();
    this.connected = false;
    this.client = mongoose;
  }

  isValidId(id: string): boolean {
    return mongoose.isValidObjectId(id);
  }

  async connect() {
    await this.client.connect(Config.MONGO_ATLAS_SRV, {});
    console.log('base de datos conectada');
  }

  async disconnect() {
    await this.client.connection.close();
    console.log('base de datos desconectada');
    this.connected = false;
  }
}
