import { normalize, schema } from 'normalizr';
import fs from 'fs';
import path from 'path';

const inputPath = path.resolve(__dirname, '../data/input.json');
const outputPath = path.resolve(__dirname, '../data/output.json');

const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

const user = new schema.Entity(
  'users',
  {},
  {
    idAttribute: '_id',
  }
);

const comment = new schema.Entity('comments', {
  commenter: user,
});

const article = new schema.Entity('articles', {
  comments: [comment],
  author: user,
});

const normalizedData = normalize(data, [article]);

let contenido = JSON.stringify(normalizedData, null, '\t');

fs.writeFileSync(outputPath, contenido);
