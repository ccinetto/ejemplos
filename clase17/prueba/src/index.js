import { Productos } from './services/productos';

// // EJEMPLO 1) PERDIR TODOS LOS PRODUCTOS
// Productos.getAll().then((data) => console.log(data));
// // -------------------------------------------------

// // EJEMPLO 2) AGREGAR PRODUCTO NUEVO
// const newData = {
//   nombre: 'Caramelos',
//   descripcion: 'caramelos ricos',
//   stock: 2000,
//   precio: 22.5,
// };

// Productos.add(newData)
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err.message);
//   });
// // -------------------------------------------------

// // EJEMPLO 3) PEDIR PRODUCTO POR ID
// Productos.get(9).then((data) => console.log(data));
// // -------------------------------------------------

// // EJEMPLO 4) ACTUALIZAR PRODUCTO
// const updatedData = {
//   precio: 50,
// };

// Productos.update(9, updatedData).then((data) => console.log(data));
// // -------------------------------------------------

// // EJEMPLO 5) ACTUALIZAR PRODUCTO
// Productos.delete(9).then((data) => console.log(data));
// // -------------------------------------------------

// // EJEMPLO 6) REALIZAR CONSULTAS (MATCHEO EXACTO)

// const myQuery = {
//   nombre: 'Cartuchera',
// };

// Productos.query(myQuery).then((data) => console.log(data));
// // -------------------------------------------------
