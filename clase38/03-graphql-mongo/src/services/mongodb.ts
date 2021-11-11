import Config from '../config';
import mongoose, { Connection } from 'mongoose';

mongoose.Promise = global.Promise;

//https://tutorial.tips/3-ways-to-fix-property-has-no-initializer-and-is-not-definitely-assigned-in-the-constructorts/

export class MongoDB {
  private instance: number;
  private uri: string;
  private connection: Connection;

  constructor(local?: boolean) {
    this.uri = local ? Config.MONGO_LOCAL_URL : Config.MONGO_ATLAS_SRV;
    this.connection = mongoose.createConnection(this.uri);
    this.instance = 0;
  }

  getConnection() {
    return this.connection;
  }

  // //https://stackoverflow.com/questions/19474712/mongoose-and-multiple-database-in-single-node-js-project
  // DbConnect(): Connection {
  //   return mongoose.createConnection(this.uri);
  // }

  // async Get(): Promise<Connection> {
  //   try {
  //     this.instance++; // this is just to count how many times our singleton is called.
  //     console.log(`DbConnection called ${this.instance} times`);

  //     if (this.db != null) {
  //       console.log(`db connection is already alive`);
  //     } else {
  //       console.log(`getting new db connection for ${this.uri}`);
  //       this.db = await this.DbConnect();
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   return this.db;
  // }
}

export const MongoAtlas = new MongoDB();
export const MongoLocal = new MongoDB(true);
