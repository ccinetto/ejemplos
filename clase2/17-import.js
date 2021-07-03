import('./16-matchall.js').then((modulo) => {
  modulo.hola();
  setTimeout(() => modulo.adios(), 5000);
});

console.log('EJ 17');
