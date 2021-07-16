// //CASO 1: Importacion multiple.
// // Se usa entre llaves y se tiene que poner el nombre que se uso para exportar

// import { sumar, restar } from './03-importar.js';

// console.log(sumar(2, 4));
// console.log(restar(2, 4));

// //CASO 2: Importacion Unica por defecto. se puede poner cualquier nombre
import Pepito from './03-exportar.js';

console.log(Pepito.sumar(2, 4));
console.log(Pepito.restar(2, 4));
