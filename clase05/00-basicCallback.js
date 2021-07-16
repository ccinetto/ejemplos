// const fs = require('fs');
import fs from 'fs';

const miCallBack = (err, data) => {
  if (err) {
    console.log('Hubo un error para leer el archivo');
    console.log(err.message);
    return;
  }

  const info = data.toString();
  console.log(`DATA DEL ARCHIVO ===> \n${info}`);
};

fs.readFile('hola.txt', miCallBack);

console.log('Sigo con las lineas');
