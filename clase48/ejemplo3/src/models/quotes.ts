import { MongoDb } from '../services/database.ts';

export interface Quote {
  _id: string;
  quote: string;
  author: string;
}

export const QuotesModel = MongoDb.collection('quotes');
