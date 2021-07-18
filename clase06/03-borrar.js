const fs = require('fs');

const pathArchivoSync = './carpetainterna/01-outputSync.txt';
const pathArchivoAsync = './carpetainterna/01-outputAsync.txt';

//Borrado sincronico
try {
  fs.unlinkSync(pathArchivoSync);
} catch (err) {
  console.log('Error Borrado Sincronica', err);
}

//Escritura Asincronica

fs.unlink(pathArchivoAsync, (err, salida) => {
  if (err) console.log('Error Borrado Asincronica', err);

  console.log('DONE');
});
