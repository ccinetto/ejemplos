const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${encodeURIComponent(
  process.env.MONGO_PSW
)}@cluster0.6bf5k.mongodb.net/${process.env.DBNAME}?retryWrites=true`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function main() {
  try {
    await client.connect();
    const db = client.db(process.env.DBNAME);
    const productos = db.collection('productos');
    const query = { nombre: 'TV' };
    const product = await productos.findOne(query);
    console.log(product);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

main();
