const fs = require('fs');

const pathArchivoSync = './carpetainterna/01-outputSync.txt';
const pathArchivoAsync = './carpetainterna/01-outputAsync.txt';

const dataSync = `esto es el texto que quiero escribir en mi archivo de forma Sincronica\n`;
const dataAsync = `esto es el texto que quiero escribir en mi archivo de forma Asincronica\n`;

//APPEND sincronica
try {
  fs.appendFileSync(pathArchivoSync, dataSync);
} catch (err) {
  console.log('Error APPEND Sincronica', err);
}

//APPEND Asincronica

fs.appendFile(pathArchivoAsync, dataAsync, (err, salida) => {
  if (err) console.log('Error APPEND Asincronica', err);

  console.log('DONE');
});
