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

console.log(operacion(4, 5, 'suma'));
console.log(operacion(4, 5, 'resta'));
console.log(operacion(4, 5, 'multiplicacion'));
console.log(operacion(4, 5, 'division'));
console.log(operacion(20, 5, 'modulo'));
