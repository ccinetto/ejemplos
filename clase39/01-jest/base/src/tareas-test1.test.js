const Tareas = require('./tareas');
const assert = require('assert').strict;

describe('Primer Grupo de tests de tareas', function () {
  it('debería crear el contenedor de tareas vacío', function () {
    const instanciaTareas = new Tareas();
    assert.strictEqual(instanciaTareas.listar().length, 0);
  });

  it('debería adicionar tareas correctamente', function () {
    const instanciaTareas = new Tareas();

    instanciaTareas.agregar('run code');
    assert.strictEqual(instanciaTareas.listar().length, 1);
    assert.deepStrictEqual(instanciaTareas.listar(), [
      { completa: false, titulo: 'run code' },
    ]);

    instanciaTareas.agregar('otra tarea');
    assert.strictEqual(instanciaTareas.listar().length, 2);
    assert.deepStrictEqual(instanciaTareas.listar(), [
      { titulo: 'run code', completa: false },
      { titulo: 'otra tarea', completa: false },
    ]);
  });

  it('debería marcar una tarea como completa', function () {
    const instanciaTareas = new Tareas();

    instanciaTareas.agregar('run code');
    instanciaTareas.agregar('otra tarea');

    instanciaTareas.completar('run code');
    assert.deepStrictEqual(instanciaTareas.listar(), [
      { titulo: 'run code', completa: true },
      { titulo: 'otra tarea', completa: false },
    ]);
  });
});

describe('Primer Grupo de tests de tareas con', function () {
  beforeAll(function () {
    console.log('\n********* Comienzo TOTAL de Test *********');
  });

  afterAll(function () {
    console.log('\n********* Fin TOTAL de Test *********');
  });

  afterEach(function () {
    console.log('\n********* FIN Test INDIVIDUAL *********');
  });

  beforeEach(function () {
    console.log('\n********* Comienzo Test INDIVIDUAL *********');
    this.instanciaTareas = new Tareas();
  });

  it('debería crear el contenedor de tareas vacío', function () {
    console.log('EJECUTANDO ==> debería crear el contenedor de tareas vacío');
    assert.strictEqual(this.instanciaTareas.listar().length, 0);
  });

  it('debería adicionar tareas correctamente', function () {
    console.log('EJECUTANDO ==> debería adicionar tareas correctamente');

    this.instanciaTareas.agregar('run code');
    assert.strictEqual(this.instanciaTareas.listar().length, 1);
    assert.deepStrictEqual(this.instanciaTareas.listar(), [
      { completa: false, titulo: 'run code' },
    ]);

    this.instanciaTareas.agregar('otra tarea');
    assert.strictEqual(this.instanciaTareas.listar().length, 2);
    assert.deepStrictEqual(this.instanciaTareas.listar(), [
      { titulo: 'run code', completa: false },
      { titulo: 'otra tarea', completa: false },
    ]);
  });

  it('debería marcar una tarea como completa', function () {
    console.log('EJECUTANDO ==> debería marcar una tarea como completa');

    this.instanciaTareas.agregar('run code');
    this.instanciaTareas.agregar('otra tarea');

    this.instanciaTareas.completar('run code');
    assert.deepStrictEqual(this.instanciaTareas.listar(), [
      { titulo: 'run code', completa: true },
      { titulo: 'otra tarea', completa: false },
    ]);
  });
});
