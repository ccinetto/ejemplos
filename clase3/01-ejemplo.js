//EJEMPLOS DE PASAJE DE FUNCIONES COMO PARAMETRO A OTRAS FUNCIONES

const func1 = (aValue) => {
  if (aValue ** 2 < 10) return false;

  return true;
};

const array = [1, 2, 3, 4, 5];

// El método forEach() ejecuta la función indicada una vez por cada elemento del array.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// for (let i = 0; i < array.length; i++) {
//   const aValue = array[i];
//   //arranca tu codigo
// }

array.forEach((aValue, index) => {
  array[index] = aValue ** 2;
});

console.log(array);

// El método filter() crea un nuevo array con todos los elementos que cumplan la condición
// implementada por la función dada.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// const s1 = array.filter(func1);
// console.log(s1);

// El método map() crea un nuevo array con los resultados de la llamada a la función
// indicada aplicados a cada uno de sus elementos.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const s2 = array.map((aValue) => {
  return aValue ** 2;
});
// console.log(array);
// console.log(s2);
