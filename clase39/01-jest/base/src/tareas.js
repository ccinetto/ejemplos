class Tareas {
  constructor() {
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
}

module.exports = Tareas;
