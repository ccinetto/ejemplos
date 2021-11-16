const { Schema } = require('mongoose');
import { MongoDB } from '../services/mongodb';

export interface UsuarioI {
  _id: string;
  nombre: string;
  email: string;
}

const usuarioSchema = new Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true },
  },
  { versionKey: false }
);

const MongoAtlas = new MongoDB();
const AtlasMongoose = MongoAtlas.getConnection();
export const User = AtlasMongoose.model<UsuarioI>('usuarios', usuarioSchema);
