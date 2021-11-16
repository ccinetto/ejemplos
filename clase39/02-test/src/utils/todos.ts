import fs, { NoParamCallback } from 'fs';

interface Todo {
  title: string;
  complete: boolean;
}

export class Todos {
  todos: Todo[];

  constructor() {
    this.todos = [];
  }

  list() {
    return this.todos;
  }

  add(title: string) {
    let todo = {
      title: title,
      complete: false,
    };
    this.todos.push(todo);
  }

  complete(title: string) {
    if (this.todos.length === 0) {
      throw new Error('No hay tareas');
    }

    let todoFound = false;
    this.todos.forEach((todo) => {
      if (todo.title === title) {
        todo.complete = true;
        todoFound = true;
        return;
      }
    });

    if (!todoFound) {
      throw new Error('Tarea no encontrada');
    }
  }

  saveToFileCb(cb: NoParamCallback) {
    fs.writeFile('todos.json', JSON.stringify(this.todos), cb);
  }

  saveToFilePromise() {
    return fs.promises.writeFile('todos.txt', JSON.stringify(this.todos));
  }
}
