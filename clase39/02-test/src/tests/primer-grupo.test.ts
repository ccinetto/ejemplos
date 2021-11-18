// import { Todos } from '../utils/todos';
// import { strict as assert } from 'assert';

// describe('test de integración de tareas', function () {
//   it('debería crear el contenedor de tareas vacío', function () {
//     const todos = new Todos();
//     assert.strictEqual(todos.list().length, 0);
//   });

//   it('debería adicionar tareas correctamente', function () {
//     const todos = new Todos();

//     todos.add('run code');
//     assert.strictEqual(todos.list().length, 1);
//     assert.deepStrictEqual(todos.list(), [
//       { complete: false, title: 'run code' },
//     ]);

//     todos.add('otra tarea');
//     assert.strictEqual(todos.list().length, 2);
//     assert.deepStrictEqual(todos.list(), [
//       { title: 'run code', complete: false },
//       { title: 'otra tarea', complete: false },
//     ]);
//   });

//   it('debería marcar una tarea como completa', function () {
//     const todos = new Todos();

//     todos.add('run code');
//     todos.add('otra tarea');

//     todos.complete('run code');
//     assert.deepStrictEqual(todos.list(), [
//       { title: 'run code', complete: true },
//       { title: 'otra tarea', complete: false },
//     ]);
//   });
// });

// describe('comprobar error en completar tarea inexistente', function () {
//   it('deberia dar error cuando no hay tareas cargadas', function () {
//     const todos = new Todos();

//     const errorEsperado = new Error('No hay tareas');

//     const funcionDisparadora = () => {
//       todos.complete('Una Tarea mas');
//     };

//     assert.throws(funcionDisparadora, errorEsperado);

//     //   assert.throws(() => {
//     //       todos.complete('una tareas más')
//     //   },errorEsperado)
//   });

//   it('deberia dar error cuando la tarea a completar no existe', function () {
//     const todos = new Todos();
//     todos.add('run code');

//     const errorEsperado = new Error('Tarea no encontrada');
//     assert.throws(() => {
//       todos.complete('una tareas más');
//     }, errorEsperado);
//   });
// });
