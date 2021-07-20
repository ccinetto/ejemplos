import { MongoClient, Context, helpers } from "../deps.ts";
import { Quote } from "../types.ts";
import { config } from "../deps.ts";
const { MONGO_USERNAME, MONGO_PSW, MONGO_PRIMARY_CLUSTER, MONGO_DBNAME } = config();

// Mongo Connection Init
const connectToMongo = async (collection: string) => {

  let output = null;

  if(!output){
    const client = new MongoClient();

    const db = await client.connect({
      db: MONGO_DBNAME,
      tls: true,
      servers: [
        {
          host: MONGO_PRIMARY_CLUSTER,
          port: 27017,
        }
      ],
      credential: {
        username: MONGO_USERNAME,
        password: encodeURIComponent(MONGO_PSW),
        db: MONGO_DBNAME,
        mechanism: 'SCRAM-SHA-1',
      },
    });

    output = db;
  }
  
  return output.collection(collection);
}

// @description: GET all Quotes
// @route GET /api/quotes
const getQuotes = async (ctx: Context) => {
  const {response} = ctx;
  try {
    const quotes = await connectToMongo('quotes');
    console.log("ENTREEE")
    const allQuotes = await quotes.find({},);
    console.log(allQuotes);
    if (allQuotes) {
      response.status = 200;
      response.body = {
        success: true,
        data: allQuotes,
      };
    } else {
      response.status = 500;
      response.body = {
        success: false,
        msg: "Internal Server Error",
      };
    }
  } catch (err) {
    console.log("ERROR");
    response.status = 500;
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

// @description: GET single quote
// @route GET /api/quotes/:id
const getQuote = async (ctx: Context) => {
  const {response, request} = ctx;
  const quotes = await connectToMongo('quotes');
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  try{
    console.log(id)
    const quote = await quotes.findOne({ quoteID: id }, {noCursorTimeout : false} as any);
  
    if (quote) {
      response.status = 200;
      response.body = {
        success: true,
        data: quote,
      };
    } else {
      response.status = 404;
      response.body = {
        success: false,
        msg: "No quote found",
      };
    }
  }
  catch(err){
    response.status = 500;
    response.body = {
      success: false,
      data: err,
    }
  }
}

// @description: ADD single quote
// @route POST /api/quotes
const addQuote = async (ctx: Context) => {
  const {response, request} = ctx;
  try {
    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "No Data",
      };
    } else {
      const body = await request.body();
      const quote: Quote = await body.value;
      const quotes = await connectToMongo('quotes');
      await quotes.insertOne(quote);
      response.status = 201;
      response.body = {
        success: true,
        data: quote,
      };
    }
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
}

const updateQuote = async (ctx: Context) => {
  const {request, response} = ctx;
  const quotes = await connectToMongo('quotes');
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  console.log("ID====>", id)
   try {
    const body = await request.body();
    const inputQuote = await body.value;
    await quotes.updateOne(
      { quoteID: id },
      { $set: { quote: inputQuote.quote, author: inputQuote.author } }
    );
    const updatedQuote = await quotes.findOne({ quoteID: id}, {noCursorTimeout : false} as any);
    response.status = 200;
    response.body = {
      success: true,
      data: updatedQuote,
    };
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
}

// @description: DELETE single quote
// @route DELETE /api/quotes/:id


/**
 * Este es el handler que se va a encragar de borrar un documento en mi Base de Datos
 * Primero hace esto, luego hace esto otro, si pasa esto hago tal cosa, sino sigo de largo
 * finalmente retorno esto
 * 
 */
const deleteQuote = async (ctx: Context) => {
  const {request, response} = ctx;
  try {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    const quotes = await connectToMongo('quotes');
    await quotes.deleteOne({ quoteID: id});
    response.status = 201;
    response.body = {
      success: true,
      msg: "Quote deleted",
    };
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
}

export { getQuotes, getQuote, addQuote, updateQuote, deleteQuote };
