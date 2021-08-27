import { mySQLDB } from './db';

class ProductosPersistencia {
  async getAll() {
    return mySQLDB.from('productos').select();
  }

  async get(id) {
    return mySQLDB.from('productos').where({ id: id }).select();
  }

  async add(data) {
    return mySQLDB('productos').insert(data);
  }

  async update(id, data) {
    return mySQLDB.from('productos').where({ id }).update(data);
  }

  async delete(id) {
    return mySQLDB.from('productos').where({ id }).del();
  }

  async query(query) {
    return mySQLDB.from('productos').where(query);
  }
}

export const Productos = new ProductosPersistencia();
