const fs = require('fs');

class Tareas {
  #fileName;
  tareas;

  constructor() {
    this.#fileName = 'tareas.json';
    this.tareas = [];
  }

  listar() {
    return this.tareas;
  }

  agregar(tituloTarea) {
    const nuevaTarea = {
      titulo: tituloTarea,
      completa: false,
    };

    this.tareas.push(nuevaTarea);
  }

  completar(tituloTarea) {
    if (this.tareas.length == 0) throw new Error('No Hay Tareas');

    let index = this.tareas.findIndex((tarea) => tarea.titulo == tituloTarea);

    if (index < 0) throw new Error('La Tarea no existe');

    this.tareas[index].completa = true;
  }

  getFileName() {
    return this.#fileName;
  }

  guardarArchivoCb(cb) {
    let contenido = JSON.stringify(this.tareas, null, '\t');
    fs.writeFile(this.#fileName, contenido, cb);
  }

  guardarArchivoPromise() {
    let contenido = JSON.stringify(this.tareas, null, '\t');
    return fs.promises.writeFile(this.#fileName, contenido);
  }
}

module.exports = Tareas;
