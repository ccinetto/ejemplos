// //URL para probar Expresiones regulares y sus combinaciones
// //https://regexr.com/

// const string = 'I am learning JavaScript not Java.';
// const re = /Java[a-z]*/gi;

// let result = string.matchAll(re);

// for (match of result) {
//   console.log(match);
// }

//ESTA PARTE ES PARA MOSTRAR EL EJ 17
const hola = () => {
  console.log('HOLA DESDE EL MODULO');
};

const adios = () => {
  console.log('ADIOS DESDE EL MODULO');
};

module.exports = {
  hola,
  adios,
};
