import { normalize, schema, denormalize } from 'normalizr';
import fs from 'fs';
import path from 'path';

const inputPath = path.resolve(__dirname, '../data/input.json');
const normalizedDataPath = path.resolve(__dirname, '../data/normalize.json');
const deNormalizedDataPath = path.resolve(
  __dirname,
  '../data/denormalize.json'
);

const empresa = JSON.parse(fs.readFileSync(inputPath));

const persona = new schema.Entity(
  'person',
  {},
  {
    idAttribute: 'id',
  }
);

const empresaSchema = new schema.Entity('empresa', {
  gerente: persona,
  encargado: persona,
  empleados: [persona],
});

const normalizedData = normalize(empresa, empresaSchema);
let contenido = JSON.stringify(normalizedData, null, '\t');

fs.writeFileSync(normalizedDataPath, contenido);

const denormalizedData = denormalize(
  normalizedData.result,
  empresaSchema,
  normalizedData.entities
);

contenido = JSON.stringify(denormalizedData, null, '\t');
fs.writeFileSync(deNormalizedDataPath, contenido);
