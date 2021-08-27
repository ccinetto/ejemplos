import knex from 'knex';

export const sqliteDB = knex({
  client: 'sqlite3',
  connection: { filename: './midbligera.sqlite' },
  useNullAsDefault: true,
});

export const mySQLDB = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'myapp_test',
  },
  pool: { min: 0, max: 7 },
});

sqliteDB.schema.hasTable('cars').then((exists) => {
  if (!exists) {
    console.log('NO EXISTE LA TABLA CARS. VAMOS A CREARLA');
    sqliteDB.schema
      .createTable('cars', (table) => {
        table.increments('id');
        table.string('name');
        table.integer('año');
      })
      .then(() => {
        console.log('DONE');
      });
  }
});

mySQLDB.schema.hasTable('productos').then((exists) => {
  if (!exists) {
    console.log('NO EXISTE LA TABLA productos. VAMOS A CREARLA');
    mySQLDB.schema
      .createTable('productos', (productosTable) => {
        productosTable.increments();
        productosTable.string('nombre').notNullable();
        productosTable.string('descripcion').notNullable();
        productosTable.integer('stock').notNullable();
        productosTable.decimal('precio', 4, 2);
      })
      .then(() => {
        console.log('DONE');
      });
  }
});
