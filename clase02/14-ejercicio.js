const func = (...argumentos) => {
  let salida = 0;

  argumentos
    .filter((a) => typeof a == 'number')
    .forEach((aValue) => {
      salida += aValue;
    });

  return [salida];
};

const resultado = func(1, 2, 3, 'pepe', 'juan');

console.log(resultado);
