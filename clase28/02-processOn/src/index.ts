/**
 * 01- BeforeExit
 * este evento se ejecuta cuando NodeJs no tiene mas tareas para ejecutar
 * No se va a llamar a este evento si matamos el proceso con process.exit
 * Probar comentando y descomentando process.exit
 */
// process.on('beforeExit', (code) => {
//   console.log(`BeforeExit ==> El proceso termino con codigo ${code}`);
// });

// // process.exit(0);

/**
 * 02- Exit
 * este evento se ejecuta cuando el proceso muere
 * Ya sea porque termino bien o porque se disparo un error que no se atajo
 * o porque se llamo a process.exit
 * Probar comentando lineas 25, 26 y 27
 * Probar descomentando de a una linea
 */

// process.on('exit', (code) => {
//   console.log(`Exit ==> El proceso termino con codigo ${code}\n\n`);
// });

// // throw new Error('hola');
// // process.exit(1);
// // process.exit(0);

/**
 * 03-uncaughtException
 * Este evento se dispara cuando hay un error que no fue atajado por el programa
 * Recibe el error que no se atajo
 * Si se agregó un listener a esta excepción, no se producirá la acción por defecto
 * (imprimir una traza del stack y salir)
 * Probar comentando el process.on("UncaughtException y ver la salida")
 */

// process.on('uncaughtException', (err) => {
//   console.log(`Uncaught Exception: ${err.message}\n\n`);
//   process.exit(1);
// });

// const miFunc2 = () => {
//   throw new Error('Err...');
// };

// const miFunc1 = () => miFunc2();

// miFunc1();
