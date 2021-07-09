const fs = require('fs');

fs.readdir(__dirname, (err, data) => {
  if (err) {
    console.log('Hubo un error para leer el directorio');
    console.log(err.message);
    return;
  }
  console.log(`\nARCHIVOS EXISTENTES =>`);
  console.log(data);
  if (data.includes('texto.txt')) {
    console.log('El archivo existe, vamos a leerlo');
    fs.readFile('texto.txt', (err, data) => {
      if (err) {
        console.log('Hubo un error para leer el archivo');
        console.log(err.message);
        return;
      }

      console.log(`\nDATA del archivo leido (Buffer) =>`);
      console.log(data);
      const info = data.toString();
      console.log(`\nDATA del archivo leido (String) =>`);
      console.log(info);

      console.log(`\nVamos a Actualizar el archivo`);

      fs.appendFile('texto.txt', 'HOLA\n', 'utf8', (err, data) => {
        if (err) {
          console.log('Hubo un error para escribir el archivo');
          console.log(err.message);
          return;
        }

        console.log(`\Archivo Actualizado. Fin del codigo`);
      });
    });
  } else {
    console.log('No existe el archivo. termino el codigo');
  }
});

console.log('EJECUTANDO LINEA 24');
