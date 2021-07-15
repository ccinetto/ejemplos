const productos = [
  { id: 1, nombre: 'Escuadra', precio: 323.5 },
  { id: 2, nombre: 'Calculadora', precio: 234.1 },
  { id: 3, nombre: 'Globo Terraqueo', precio: 18.5 },
  { id: 4, nombre: 'Paleta Pintura', precio: 56.8 },
  { id: 5, nombre: 'Reloj', precio: 200 },
];

const arrayNombres = productos.map((unProducto) => unProducto.nombre);
let ejercicioA = arrayNombres.join(',');

let ejercicioB = 0;
productos.forEach((unProducto) => {
  ejercicioB += unProducto.precio;
});

let ejercicioC = ejercicioB / productos.length;

const arrayPrecios = productos.map((unProducto) => unProducto.precio);
let ejercicioD = Math.min(...arrayPrecios);
let ejercicioE = Math.max(...arrayPrecios);

console.log(ejercicioA);
console.log(ejercicioB);
console.log(ejercicioC);
console.log(ejercicioD);
console.log(ejercicioE);

const salida = {
  ejercicioA,
  ejercicioB,
  ejercicioC,
  ejercicioD,
  ejercicioE,
};

console.log(salida);
