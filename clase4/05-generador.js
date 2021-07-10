function* generatorFunction() {
  console.log('Ejecutando mi Codigo Parte 1');
  yield 'Dato1';
  console.log('Ejecutando mi Codigo Parte 2');
  yield 'Dato2';
  console.log('Ejecutando mi Codigo Parte 3');
  yield 'Dato3';
  console.log('Ejecutando mi Codigo Parte Final');
  return 'DatoFinal';
}

const generatorObject = generatorFunction();
console.log(generatorObject);
let result = generatorObject.next();
console.log(result);

result = generatorObject.next();
console.log(result);

result = generatorObject.next();
console.log(result);

result = generatorObject.next();
console.log(result);
