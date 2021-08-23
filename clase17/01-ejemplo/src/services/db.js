import knex from 'knex';
import dbConfig from '../../knexfile';

class DB {
  constructor() {
    const environment = process.env.NODE_ENV || 'development';
    console.log(`SETTING ${environment} DB`);
    const options = dbConfig[environment];
    this.connection = knex(options);
  }

  init() {
    this.connection.schema.hasTable('categorias').then((exists) => {
      if (exists) return;
      console.log('Creamos la tabla categorias!');

      return this.connection.schema.createTable(
        'categorias',
        (categoriasTable) => {
          categoriasTable.increments();
          categoriasTable.string('nombre').notNullable();
          categoriasTable.timestamp('createdAt').defaultTo(new Date());
        }
      );
    });

    this.connection.schema.hasTable('productos').then((exists) => {
      if (exists) return;
      console.log('Creamos la tabla productos!');

      return this.connection.schema.createTable(
        'productos',
        (productosTable) => {
          productosTable.increments();
          productosTable.string('nombre').notNullable();
          productosTable.string('descripcion').notNullable();
          productosTable.integer('stock').notNullable();
          productosTable.decimal('precio', 4, 2);
          productosTable.timestamp('createdAt').defaultTo(new Date());
          productosTable
            .integer('category_id')
            .unsigned()
            .references('id')
            .inTable('categorias');
        }
      );
    });
  }

  get(tableName, id) {
    if (id) return this.connection(tableName).where('id', id);

    return this.connection(tableName);
  }

  async create(tableName, data) {
    return this.connection(tableName).insert(data);
  }

  update(tableName, id, data) {
    return this.connection(tableName).where('id', id).update(data);
  }

  delete(tableName, id) {
    return this.connection(tableName).where('id', id).del();
  }
}

export const DBService = new DB();
