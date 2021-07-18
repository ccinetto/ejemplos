const fs = require('fs');

const pathArchivoSync = './carpetainterna/01-outputSync.txt';
const pathArchivoAsync = './carpetainterna/01-outputAsync.txt';

const dataSync = `esto es el texto que quiero escribir en mi archivo de forma Sincronica\n`;
const dataAsync = `esto es el texto que quiero escribir en mi archivo de forma Asincronica\n`;

//Escritura sincronica
try {
  fs.writeFileSync(pathArchivoSync, dataSync);
} catch (err) {
  console.log('Error Escritura Sincronica', err);
}

//Escritura Asincronica

fs.writeFile(pathArchivoAsync, dataAsync, (err, salida) => {
  if (err) console.log('Error Escritura Asincronica', err);

  console.log('DONE');
});
