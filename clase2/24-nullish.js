const exp1 = null ?? 42;
const exp2 = undefined ?? 42;

const exp3 = 3 ?? 42;
const exp4 = 0 ?? 'pepe';

console.log(exp1);
console.log(exp2);
console.log(exp3);
console.log(exp4);

// const objeto = {
//   nombre: 'cristian',
//   edad: 28,
// };

// console.log(objeto.nacionalidad.ciudad);
// console.log(objeto?.nacionalidad?.ciudad);
