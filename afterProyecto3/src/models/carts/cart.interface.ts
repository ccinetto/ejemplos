import { Schema } from 'mongoose';
import { ProductI } from '../products/products.interface';

export type productReference = Schema.Types.ObjectId | string;

export interface CartI {
  _id: string;
  userId: productReference;
  products: ProductCart[];
}

export interface ProductCart {
  _id: string;
  amount: number;
}

export interface CartBaseClass {
  get(id: string): Promise<CartI>;
  createCart(userId: string): Promise<CartI>;
  addProduct(cartId: string, product: ProductCart): Promise<CartI>;
  deleteProduct(cartId: string, product: ProductCart): Promise<CartI>;
}
