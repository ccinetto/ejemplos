import { normalize, schema, denormalize } from 'normalizr';
import fs from 'fs';
import path from 'path';
import util from 'util';

const inputPath = path.resolve(__dirname, '../data/input.json');
const normalizedDataPath = path.resolve(__dirname, '../data/normalize.json');
const deNormalizedDataPath = path.resolve(
  __dirname,
  '../data/denormalize.json'
);

const holdings = JSON.parse(fs.readFileSync(inputPath));

// console.log(util.inspect(holdings, true, 25, true));
// // console.log(holdings);
const persona = new schema.Entity(
  'person',
  {},
  {
    idAttribute: 'id',
  }
);

const empresa = new schema.Entity('empresa', {
  gerente: persona,
  encargado: persona,
  empleados: [persona],
});

const holdingSchema = new schema.Entity('holding', {
  empresas: [empresa],
});

// const normalizedData = normalize(holdings, holdingSchema);
// let contenido = JSON.stringify(normalizedData, null, '\t');

// fs.writeFileSync(normalizedDataPath, contenido);

// const denormalizedData = denormalize(
//   normalizedData.result,
//   holdingSchema,
//   normalizedData.entities
// );

// contenido = JSON.stringify(denormalizedData, null, '\t');
// fs.writeFileSync(deNormalizedDataPath, contenido);
