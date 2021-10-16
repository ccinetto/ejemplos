import fs from 'fs/promises';

const filePath = './miarchivo.txt';

fs.readdir(__dirname)
  .then((data) => {
    const miData = data.toString();
    console.log(`DATA File Actual => ${miData}`);
    return fs.appendFile('texto.txt', 'HOLA\n', 'utf8');
  })
  .then((resp) => {
    console.log(resp);
    return fs.readFile('texto.txt');
  })
  .then((data) => {
    const miData = data.toString();
    console.log(`DATA File Nueva => ${miData}`);
  })
  .catch((err) => {
    console.log('Ataje el error');
    console.log(err);
  })
  .finally(() => {
    console.log('ESTO SE EJECUTA SI O SI');
  });

console.log('ULTIMA LINEA DE CODIGO');
