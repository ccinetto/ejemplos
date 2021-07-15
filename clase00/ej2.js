var valores = [true, 5, 'hola', false, 'adios', 2];

const funcionA = function (array) {
  let salida = '';

  for (let aValue of array) {
    if (typeof aValue == 'string' && aValue.length > salida.length)
      salida = aValue;
  }

  return salida;
};

const funcionB = (array) => {
  const indice = array.indexOf(false, 0);
  return indice;
};

const funcionC = (array, op) => {
  const numeros = array.filter((aValue) => typeof aValue == 'number');
  const [n1, n2] = [...numeros];

  const operaciones = {
    '+': n1 + n2,
    '-': n1 - n2,
    '*': n1 * n2,
    '/': n1 / n2,
  };

  const resultado = operaciones[op] ? operaciones[op] : operaciones['+'];
  return resultado;
};

console.log(funcionA(valores));
console.log(funcionB(valores));
console.log(funcionC(valores, 'pepito'));
