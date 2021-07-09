const funcA = () => {
  console.log('Ejecutando funcionA');
};

const funcB = () => {
  console.log('Ejecutando funcionB');
};

const funcC = () => {
  console.log('Ejecutando funcionC');
};

module.exports = {
  funcA,
  funcB,
  funcC,
};

console.log('PRIMER LINEA DEL CODIGO');
funcA();
console.log('EJECUCION DE CODIGO LUEGO DE funcionA');
funcB();
console.log('EJECUCION DE CODIGO LUEGO DE funcionB');
funcC();
console.log('EJECUCION DE CODIGO LUEGO DE funcionC');
