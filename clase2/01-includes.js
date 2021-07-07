const array = ['juan', 'carlos', 'pepe', 'federico'];

// console.log(array.includes('Franco'));

// if (array.includes('juan')) console.log('juan ESTA');

// if (array.includes('FEDERICO')) console.log('FEDERICO ESTA');

//SE puede especificar el indice desde donde comenzar, si no se especifica se arranca desde el principio
// console.log(array.includes('carlos', 1));

// //Si fromIndex es mayor o igual que la longitud de la matriz, se devuelve false
// console.log(array.includes('carlos', 10));

// //si fromIndex es negativo se arranca desde la derecha y
// //si es mayor a la logintud es como decir que se arranca desde el principio
console.log(array.includes('pepe', -3));
console.log(array.includes('pepe', -2));
console.log(array.includes('pepe', -1));
