import { CartFactoryDAO } from '../models/carts/cart.factory';
import { TipoPersistencia } from '../models/carts/cart.factory';
import { CartI } from '../models/carts/cart.interface';
import { UserAPI } from './users';
import { productsAPI } from './productos';
/**
 * Con esta variable elegimos el tipo de persistencia
 */
const tipo = TipoPersistencia.MongoAtlas;

class Cart {
  private carts;

  constructor() {
    this.carts = CartFactoryDAO.get(tipo);
  }

  async getCart(userId: string): Promise<CartI> {
    return this.carts.get(userId);
  }

  async createCart(userId: string): Promise<CartI> {
    const user = await UserAPI.getUsers(userId);

    if (!user.length)
      throw new Error('User does not exist. Error creating cart');

    const newCart = await this.carts.createCart(userId);
    return newCart;
  }

  async addProduct(
    cartId: string,
    productId: string,
    amount: number
  ): Promise<CartI> {
    const product = (await productsAPI.getProducts(productId))[0];

    const addProduct = {
      _id: productId,
      nombre: product.nombre,
      precio: product.precio,
      amount,
    };

    const updatedCart = await this.carts.addProduct(cartId, addProduct);
    return updatedCart;
  }

  async deleteProudct(cartId: string, productId: string, amount: number) {
    const product = (await productsAPI.getProducts(productId))[0];

    const deleteProduct = {
      _id: productId,
      nombre: product.nombre,
      precio: product.precio,
      amount,
    };

    const updatedCart = await this.carts.deleteProduct(cartId, deleteProduct);
    return updatedCart;
  }
}

export const CartAPI = new Cart();
