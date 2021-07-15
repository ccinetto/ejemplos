const array = [
  1,
  2,
  3,
  [4, 5, 6],
  [7, 8],
  [9, 10],
  [11, 12, 13],
  [14, 15, [16, 17]],
  [18, 19, [20, 21, [22, 23, 24]]],
];

//si no le pasamos parametro solo te convierte 1 nivel
//le podemos pasar por parametros la profundidad que deberia eliminar
// console.log(array.flat());
// console.log(array.flat(2));
// console.log(array.flat(3));

const funciondelMap = (aValue) => [aValue, aValue ** 3 - 1];

const array2 = [1, 2, 3];

console.log(array2.flatMap((aValue) => funciondelMap(aValue)));

// const salida = array2.flatMap(funciondelMap);

// console.log(salida);
