import mongoose from 'mongoose';

export interface ProductI {
  _id?: string;
  nombre: string;
  precio: number;
  stock: number;
}
