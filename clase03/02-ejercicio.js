const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;
const modulo = (a, b) => a % b;

const operacion = (n1, n2, op) => {
  const opciones = {
    suma: suma(n1, n2),
    resta: resta(n1, n2),
    multiplicacion: multiplicacion(n1, n2),
    division: division(n1, n2),
    modulo: modulo(n1, n2),
  };

  return typeof opciones[op] == 'number' ? opciones[op] : 'error';
};

const operacion2 = (n1, n2, callback) => callback(n1, n2);

// console.log(operacion2(4, 5, suma));
// console.log(operacion2(4, 5, resta));
// console.log(operacion2(4, 5, multiplicacion));
// console.log(operacion2(4, 5, division));
// console.log(operacion2(21, 2, modulo));

// console.log(operacion(4, 5, 'suma'));
// console.log(operacion(4, 5, 'resta'));
// console.log(operacion(4, 5, 'multiplicacion'));
// console.log(operacion(4, 5, 'division'));
// console.log(operacion(20, 5, 'modulo'));

// setTimeout(() => {
//   console.log(suma(4, 5));
// }, 5000);

setInterval(() => {
  console.log(suma(4, 5));
}, 2000);
