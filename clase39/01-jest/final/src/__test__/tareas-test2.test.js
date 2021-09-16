const Tareas = require('../tareas');

/**
 * Explicacion como testear errores
 * https://medium.com/@afolabiwaheed/how-to-test-a-function-thats-expected-to-throw-error-in-jest-2419cc7c6462
 */

describe('comprobar error en completar tarea inexistente', function () {
  beforeEach(function () {
    this.instanciaTareas = new Tareas();
  });

  it('deberia dar error cuando no hay tareas cargadas', function () {
    const errorMsg = 'No Hay Tareas';

    const funcionDisparadora = () => {
      this.instanciaTareas.completar('hacer la cama');
    };
    expect(funcionDisparadora).toThrow(errorMsg);
  });

  it('deberia dar error cuando la tarea a completar no existe', function () {
    this.instanciaTareas.agregar('run code');

    const errorMsg = 'La Tarea no existe';
    const funcionDisparadora = () => {
      this.instanciaTareas.completar('hacer la cama');
    };

    expect(funcionDisparadora).toThrow(errorMsg);
  });
});
