const nombre = 'cristian';

const edad = 27;

//FORMA 1
const mensaje = 'HOLA, mi nombre es ' + nombre + '\ny tengo ' + edad + ' años';
console.log(mensaje);

//FORMA 2
console.log('Hola, mi nombre es', nombre, '\n\ty tengo', edad, 'años');

//ES6 FORMA 3
console.log(`Hola, mi nombre es ${nombre}

        y tengo ${edad} años`);
