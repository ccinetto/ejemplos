import { ProductModel } from './products.schema';
import { MyMongoClient } from '../../services/dbMongo';
import { ProductI } from './product.interfaces';
import ProductsDTO from './products.dto';

class ProductDao {
  client: MyMongoClient;
  productos: typeof ProductModel;

  constructor() {
    this.client = new MyMongoClient();
    this.client.connect();
    this.productos = ProductModel;
  }

  async get(id?: string): Promise<ProductsDTO[]> {
    let output: ProductI[] = [];

    if (id) {
      if (this.client.isValidId(id)) {
        const document: ProductI = await this.productos.findById(id);
        if (document) output.push(document);
      }
    } else {
      output = await this.productos.find();
    }

    return output.map((aProduct) => new ProductsDTO(aProduct));
  }

  async add(data: ProductI): Promise<ProductsDTO> {
    const newProduct = new this.productos(data);
    await newProduct.save();

    return new ProductsDTO(newProduct);
  }

  async update(id: string, newProductData: ProductI): Promise<ProductsDTO> {
    const result = await this.productos.findByIdAndUpdate(id, newProductData, {
      new: true,
    });
    return new ProductsDTO(result);
  }

  async delete(id: string) {
    await this.productos.findByIdAndDelete(id);
  }
}

export default ProductDao;
