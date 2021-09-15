import { newProductI, ProductI } from '../products.interface';

export class ProductosMemDAO {
  private productos: ProductI[] = [];

  constructor() {
    const mockData = [
      { _id: '1', nombre: 'lapiz', precio: 200 },
      { _id: '2', nombre: 'cartuchera', precio: 250 },
      { _id: '3', nombre: 'boligoma', precio: 260 },
    ];

    mockData.forEach((aMock) => this.productos.push(aMock));
  }

  findIndex(id: string) {
    return this.productos.findIndex((aProduct) => aProduct._id == id);
  }

  find(id: string): ProductI | undefined {
    return this.productos.find((aProduct) => aProduct._id === id);
  }

  get(id?: string): ProductI[] {
    if (id) {
      return this.productos.filter((aProduct) => aProduct._id === id);
    }
    return this.productos;
  }

  add(data: newProductI) {
    if (!data.nombre || !data.precio) throw new Error('invalid data');

    const newItem: ProductI = {
      _id: (this.productos.length + 1).toString(),
      nombre: data.nombre,
      precio: data.precio,
    };

    this.productos.push(newItem);

    return newItem;
  }

  update(id: string, newProductData: newProductI) {
    const index = this.findIndex(id);
    const oldProduct = this.productos[index];

    const updatedProduct: ProductI = { ...oldProduct, ...newProductData };
    this.productos.splice(index, 1, updatedProduct);
    return updatedProduct;
  }

  delete(id: string) {
    const index = this.findIndex(id);
    this.productos.splice(index, 1);
  }
}
