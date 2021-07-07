const fs = require('fs');

fs.readFile('texto.txt', (err, data) => {
  if (err) {
    console.log('Hubo un error para leer el archivo');
    console.log(err.message);
    return;
  }

  console.log(data);
  const info = data.toString();
  console.log(info);
  fs.appendFile('texto.txt', 'HOLA\n', 'utf8', (err, data) => {
    if (err) {
      console.log('Hubo un error para escribir el archivo');
      console.log(err.message);
      return;
    }

    console.log(data);
  });
});

console.log('EJECUTANDO LINEA 24');
