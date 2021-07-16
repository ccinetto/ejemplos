function saludar(nombre) {
  console.log(`HOLA UN GUSTO ${saludar}`);
}

console.log(saludar('pepe'));

// const operacion = (a: number, b: number, op: string) => {
//   return new Promise((resolve, reject) => {
//     import('./misFunciones.js').then((modulo) => {
//       if (op == 'suma') resolve(modulo.suma(a, b));
//       else resolve(modulo.resta(a, b));
//     });
//   });
// };

// const operaciones = () => {
//   operacion(2, 4, 'suma')
//     .then((resultado1) => {
//       console.log(resultado1);

//       return operacion(2, 4, 'resta');
//     })
//     .then((resultado2) => {
//       console.log(resultado2);
//       console.log('FIN');
//     });
// };

// operaciones();
