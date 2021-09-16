const Tareas = require('./tareas');

const instanciaTarea = new Tareas();

console.log(instanciaTarea.listar());

instanciaTarea.agregar('run code');
console.log(instanciaTarea.listar());

instanciaTarea.agregar('otra tarea');
console.log(instanciaTarea.listar());

instanciaTarea.completar('run code');
console.log(instanciaTarea.listar());
