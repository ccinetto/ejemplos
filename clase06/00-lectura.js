const fs = require('fs');
const path = require('path');

//NOTA: 4 formas distintas de referenciar el mismo archivo
console.log(__dirname);

const pathArchivo1 = 'textossaddsaads.txt';
const pathArchivo2 = './textsdasadsdao.txt';
const pathArchivo3 = `${__dirname}/texto.txt`;
const pathArchivo4 = path.resolve(__dirname, './../clase05', 'texto.txt');

console.log(pathArchivo4);
const pathNuevoArchivo = 'hsdadsaasdadsola.txt';
//Lectura sincronica
try {
  const data = fs.readFileSync(pathNuevoArchivo, 'utf-8');
  console.log(data);
} catch (err) {
  console.log('Error lectura Sincronica');
}

//Lectura asincronica

fs.readFile(pathNuevoArchivo, 'utf-8', (error, dataAsync) => {
  if (error) return console.log('Error lectura Asincronica', error);

  console.log(dataAsync.toString());
});
