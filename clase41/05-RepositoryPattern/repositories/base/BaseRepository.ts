// import all interfaces
import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';

// we imported all types from mongodb driver, to use in code
import {
  Db,
  Collection,
  InsertOneWriteOpResult,
  WithId,
  DeleteWriteOpResultObject,
  UpdateWriteOpResult,
  ObjectId,
} from 'mongodb';

// that class only can be extended
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  //creating a property to use your code in all instances
  // that extends your base repository and reuse on methods of class
  public readonly _collection: Collection;

  //we created constructor with arguments to manipulate mongodb operations
  constructor(db: Db, collectionName: string) {
    this._collection = db.collection(collectionName);
  }

  // we add to method, the async keyword to manipulate the insert result
  // of method.
  async create(item: T): Promise<boolean> {
    const result: InsertOneWriteOpResult<WithId<T>> =
      await this._collection.insertOne(item);
    // after the insert operations, we returns only ok property (that haves a 1 or 0 results)
    // and we convert to boolean result (0 false, 1 true)
    console.log(result);
    // return result.result.ok === 1;
    return !!result.result.ok;
  }

  async update(id: string, item: T): Promise<boolean> {
    const result: UpdateWriteOpResult = await this._collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: item }
    );
    //console.log(result)
    return !!result.modifiedCount;
  }

  async delete(id: string): Promise<boolean> {
    const result: DeleteWriteOpResultObject = await this._collection.deleteOne({
      _id: new ObjectId(id),
    });
    return !!result.deletedCount;
  }

  async find(): Promise<T[]> {
    const itemsFound: T[] = await this._collection.find({}).toArray();
    return itemsFound;
  }

  async findOne(id: string): Promise<T> {
    const itemFound: T = await this._collection.findOne({
      _id: new ObjectId(id),
    });
    return itemFound;
  }
}
