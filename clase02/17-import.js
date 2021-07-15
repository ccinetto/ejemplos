// const { hola, adios } = require('./16-matchall');

// hola();
// adios();

import('./16-matchall.js').then((modulo) => {
  console.log(modulo);
  modulo.hola();
  setTimeout(() => modulo.adios(), 5000);
});

console.log('EJ 17');
