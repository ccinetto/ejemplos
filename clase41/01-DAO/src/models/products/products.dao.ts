import { ProductModel } from './products.schema';
import { MyMongoClient } from '../../services/dbMongo';
import { ProductI } from './product.interfaces';

class ProductDao {
  client: MyMongoClient;
  productos: typeof ProductModel;

  constructor() {
    this.client = new MyMongoClient();
    this.client.connect();
    this.productos = ProductModel;
  }

  async get(id?: string): Promise<ProductI[]> {
    let output: ProductI[] = [];

    if (id) {
      if (this.client.isValidId(id)) {
        const document = await this.productos.findById(id);
        if (document) output.push(document);
      }
    } else {
      output = await this.productos.find();
    }

    return output;
  }

  async add(data: ProductI): Promise<ProductI> {
    const newProduct = new this.productos(data);
    await newProduct.save();

    return newProduct;
  }

  async update(id: string, newProductData: ProductI): Promise<ProductI> {
    return this.productos.findByIdAndUpdate(id, newProductData, { new: true });
  }

  async delete(id: string) {
    await this.productos.findByIdAndDelete(id);
  }
}

export default ProductDao;
