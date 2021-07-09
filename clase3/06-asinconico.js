const fs = require('fs');

// //FORMA INCORRECTA DE HACERLO

const procesarArchivo = (err, data) => {
  if (err) return '';

  console.log('Termine de leer el archivo');
  return data.toString();
};

const leerArchivo = () => {
  fs.readFile('texto.txt', procesarArchivo);
  fs.writeFile('texto.txt', 'NUEVA DATA', 'utf-8', procesarArchivo);
};

console.log('PRIMER LINEA DEL CODIGO');
const data = leerArchivo();
console.log('EJECUCION DE CODIGO LUEGO DE leerArchivo');
console.log(`DATA ==>\n ${data}`);

// // FORMA CORRECTA DE HACERLO
// const leerArchivo = () => {
//   try {
//     const data = fs.readFileSync('texto.txt');
//     return data.toString();
//   } catch {
//     return '';
//   }
// };

// console.log('PRIMER LINEA DEL CODIGO');
// const data = leerArchivo();
// console.log('EJECUCION DE CODIGO LUEGO DE leerArchivo');
// console.log(`DATA ==>\n ${data}`);
