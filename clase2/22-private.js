class Person {
  #dni;
  nombre;
  #apellido;

  constructor(nombre, apellido) {
    this.#dni = this.#between(37000000, 39000000);
    this.nombre = nombre;
    this.#apellido = apellido;
  }

  #between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getInfo() {
    console.log(
      `HOLA mi nombre es ${this.nombre} ${this.#apellido} y mi dni es ${
        this.#dni
      }`
    );
  }

  cambiarApellido(nuevoApellido) {
    this.#apellido = nuevoApellido;
  }
}

const persona1 = new Person('pepe', 'argento');

persona1.getInfo();

persona1.nombre = 'Jacinto';
persona1.getInfo();

// persona1.#apellido = 'dsasadads';
// persona1.getInfo();

persona1.cambiarApellido('Rodriguez');
persona1.getInfo();
