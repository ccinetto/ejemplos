const fs = require('fs');
const path = require('path');

//NOTA: 4 formas distintas de referenciar el mismo archivo
const pathArchivo1 = 'texto.txt';
const pathArchivo2 = './texto.txt';
const pathArchivo3 = `${__dirname}/texto.txt`;
const pathArchivo4 = path.resolve(__dirname, 'texto.txt');

//Lectura sincronica
try {
  const data = fs.readFileSync(pathArchivo4, 'utf-8');

  console.log(data.toString());
} catch (err) {
  console.log('Error lectura Sincronica');
}

//Lectura asincronica

fs.readFile(pathArchivo4, 'utf-8', (error, dataAsync) => {
  if (error) console.log('Error lectura Asincronica', err);

  console.log(dataAsync.toString());
});
