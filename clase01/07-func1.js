// // //FORMAL TRADICIONAL

// // function pepe() {
// //   console.log('HOLAAAA');
// // }

// // console.log(pepe(2, 4));

// // //FUNCION ANONIMA

// // const array = [1, 2, 3, 4, 5];

// // array.forEach(function (aValue) {
// //   console.log(aValue);
// // });

// // FUNCION ANONIMA PASADA COMO ARGUMENTO A UNA FUNCION

// // const miFuncion = function (aValue) {
// //   console.log(aValue * 2);
// // };

// // array.forEach(miFuncion);

// //FUNCION ANONIMA PASADA COMO ARGUMENTO A UNA FUNCION MAS COMPLEJA

// const fs = require('fs');

// const miFuncion2 = function (err, file) {
//   console.log(err);
//   console.log(file.toString());
// };

// fs.readFile('hola.txt', miFuncion2);

// array = [1, 2, 3, 4, 5];

// // array.filter((aValue) => aValue > 2);

// // fs.readFile('hola.txt', miFuncion2);

// //FUNCION IIFE

// (function () {
//   console.log('HOLA');
// })();

// (function (a, b) {
//   console.log(a + b);
// })(1, 2);

// const pepe = function () {
//   console.log('HOLA');
// };

// pepe();
