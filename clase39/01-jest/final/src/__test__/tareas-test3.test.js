const Tareas = require('../tareas');
const assert = require('assert').strict;
const fs = require('fs');
/**
 * Explicacion como testear errores
 * https://medium.com/@afolabiwaheed/how-to-test-a-function-thats-expected-to-throw-error-in-jest-2419cc7c6462
 */

describe('testeo parte asincronica', function () {
  beforeEach(function () {
    this.instanciaTareas = new Tareas();
  });

  it('debería guardar una tarea en el archivo todos.txt usando callback', function (done) {
    this.instanciaTareas.agregar('guardar tarea callback');
    this.instanciaTareas.guardarArchivoCb((err) => {
      // 1) Chequeo que no haya habido errores
      expect(err).toBe(null);

      //Chequeo que el archivo exista
      const fileName = this.instanciaTareas.getFileName();
      fs.stat(fileName, (err, stat) => {
        expect(err).toBe(null);

        //Chequeo contenido esperado
        const contenidoEsperado = [
          {
            titulo: 'guardar tarea callback',
            completa: false,
          },
        ];

        fs.readFile(fileName, (err, data) => {
          expect(err).toBe(null);
          const contenido = JSON.parse(data);
          expect(contenido).toEqual(contenidoEsperado);
          done();
        });
      });
    });
  });

  it('debería guardar una tarea en el archivo todos.txt usando promise (then/catch)', function () {
    this.instanciaTareas.agregar('guardar tarea Promises TC');
    //return todos.saveToFilePromise().then(() => {
    const fileName = this.instanciaTareas.getFileName();
    //Chequeo contenido esperado
    const contenidoEsperado = [
      {
        titulo: 'guardar tarea Promises TC',
        completa: false,
      },
    ];

    return this.instanciaTareas
      .guardarArchivoPromise()
      .then(() => fs.promises.stat(this.instanciaTareas.getFileName()))
      .then(() => fs.promises.readFile(fileName))
      .then((fileData) => {
        const data = JSON.parse(fileData);
        expect(data).toEqual(contenidoEsperado);
      });
  });

  it('debería guardar una tarea en el archivo todos.txt usando promise (async/await)', async function () {
    // expect.assertions(2);

    this.instanciaTareas.agregar('guardar tarea Promises TC');
    //return todos.saveToFilePromise().then(() => {
    const fileName = this.instanciaTareas.getFileName();
    //Chequeo contenido esperado
    const contenidoEsperado = [
      {
        titulo: 'guardar tarea Promises TC',
        completa: false,
      },
    ];

    await this.instanciaTareas.guardarArchivoPromise();

    await fs.promises.stat(fileName);

    const fileData = await fs.promises.readFile(fileName);
    const data = JSON.parse(fileData);
    expect(data).toEqual(contenidoEsperado);
  });
});
