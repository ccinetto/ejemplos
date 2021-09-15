import fs from 'fs';
import { newProductI, ProductI } from '../products.interface';

export class ProductosFSDAO {
  private productos: ProductI[] = [];
  private nombreArchivo: string;

  constructor(fileName: string) {
    const mockData = [
      { _id: '1', nombre: 'lapiz', precio: 200 },
      { _id: '2', nombre: 'cartuchera', precio: 250 },
      { _id: '3', nombre: 'boligoma', precio: 260 },
    ];
    this.nombreArchivo = fileName;
    this.guardar(this.nombreArchivo, mockData);
  }

  async leer(archivo: string): Promise<ProductI[]> {
    return JSON.parse(await fs.promises.readFile(archivo, 'utf-8'));
  }

  async guardar(archivo: string, productos: ProductI[]): Promise<void> {
    await fs.promises.writeFile(archivo, JSON.stringify(productos, null, '\t'));
  }

  async findIndex(id: string): Promise<number> {
    const productos = await this.leer(this.nombreArchivo);
    return productos.findIndex((aProduct: ProductI) => aProduct._id == id);
  }

  async find(id: string): Promise<ProductI | undefined> {
    const productos = await this.leer(this.nombreArchivo);

    return productos.find((aProduct) => aProduct._id === id);
  }

  async get(id?: string): Promise<ProductI[]> {
    const productos = await this.leer(this.nombreArchivo);

    if (id) {
      return productos.filter((aProduct) => aProduct._id === id);
    }
    return productos;
  }

  async add(data: newProductI): Promise<ProductI> {
    if (!data.nombre || !data.precio) throw new Error('invalid data');

    const productos = await this.leer(this.nombreArchivo);

    const newItem: ProductI = {
      _id: (productos.length + 1).toString(),
      nombre: data.nombre,
      precio: data.precio,
    };

    productos.push(newItem);

    await this.guardar(this.nombreArchivo, productos);

    return newItem;
  }

  async update(id: string, newProductData: newProductI): Promise<ProductI> {
    const productos = await this.leer(this.nombreArchivo);

    const index = await this.findIndex(id);
    const oldProduct = productos[index];

    const updatedProduct: ProductI = { ...oldProduct, ...newProductData };
    productos.splice(index, 1, updatedProduct);

    await this.guardar(this.nombreArchivo, productos);

    return updatedProduct;
  }

  async delete(id: string): Promise<void> {
    const productos = await this.leer(this.nombreArchivo);

    const index = await this.findIndex(id);
    productos.splice(index, 1);
    await this.guardar(this.nombreArchivo, productos);
  }
}
