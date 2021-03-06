import moment from 'moment'; // require

const miCumple = moment('07-11-1993', 'DD-MM-YYYY');
const now = moment();

console.log('Hoy es', now.format('DD-MM-YYYY'));
console.log('Naci el', miCumple.format('DD-MM-YYYY'));

const diferenciaDias = now.diff(miCumple, 'days');
const diferenciaAnios = now.diff(miCumple, 'years');

console.log(`Desde mi nacimiento han pasado ${diferenciaAnios} años`);
console.log(`Desde mi nacimiento han pasado ${diferenciaDias} dias`);

/**
 * INFO
 * SETEANDO BABEL SIN NODEMON
 * https://jsguild.com/how-to-setup-babel-without-nodemon-in-nodejs/
 *
 * SETEANDO BABEL CON NODEMON
 * https://medium.com/@pativancarrasco/why-your-es6-syntax-doesnt-work-in-node-js-and-how-to-fix-it-161f0708f1ad
 */
