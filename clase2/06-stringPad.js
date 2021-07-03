const miCadena = '825';

//PadStart aplica el relleno al principio y PadEnd aplica el relleno al final
console.log(miCadena.padStart(10, '0'));
console.log(miCadena.padEnd(10, '0'));

//si no se pone el caracter de relleno, se completa con espacios
console.log(miCadena.padStart(10));
console.log(miCadena.padEnd(10));
