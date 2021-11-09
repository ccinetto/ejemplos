import mongoose, { Schema } from 'mongoose';
import Config from '../../../config';
import { CartI, ProductCart, CartBaseClass } from '../cart.interface';

const cartSchema = new mongoose.Schema<CartI>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  products: [
    {
      _id: Schema.Types.ObjectId,
      amount: Number,
    },
  ],
});

export class CartsAtlasDAO implements CartBaseClass {
  private srv: string;
  private carts;

  constructor(local: boolean = false) {
    if (local)
      this.srv = `mongodb://localhost:27017/${Config.MONGO_LOCAL_DBNAME}`;
    else this.srv = Config.MONGO_ATLAS_SRV;
    mongoose.connect(this.srv);
    this.carts = mongoose.model<CartI>('cart', cartSchema);
  }

  async get(userId: string): Promise<CartI> {
    const result = await this.carts.findOne({ userId });

    if (!result) throw new Error('id not found');

    return result;
  }

  async createCart(userId: string): Promise<CartI> {
    const newCart = new this.carts({
      userId,
      products: [],
    });

    await newCart.save();

    return newCart;
  }

  productExist(cart: CartI, productId: string): boolean {
    const index = cart.products.findIndex(
      (aProduct) => aProduct._id == productId
    );

    if (index < 0) return false;

    return true;
  }

  async addProduct(cartId: string, product: ProductCart): Promise<CartI> {
    const cart = await this.carts.findById(cartId);
    if (!cart) throw new Error('Cart not found');

    const index = cart.products.findIndex(
      (aProduct) => aProduct._id == product._id
    );

    if (index < 0) cart.products.push(product);
    else cart.products[index].amount += product.amount;

    await cart.save();

    return cart;
  }

  async deleteProduct(cartId: string, product: ProductCart): Promise<CartI> {
    const cart = await this.carts.findById(cartId);
    if (!cart) throw new Error('Cart not found');

    const index = cart.products.findIndex(
      (aProduct) => aProduct._id == product._id
    );

    if (index < 0) throw new Error('Product not found');

    if (cart.products[index].amount <= product.amount)
      cart.products.splice(index, 1);
    else cart.products[index].amount -= product.amount;

    await cart.save();
    return cart;
  }
}
