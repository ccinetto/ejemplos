class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`HOLA, me llamo ${this.nombre} y tengo ${this.edad} años`);
  }

  static isPerson(person) {
    if (
      person.nombre &&
      typeof person.nombre == 'string' &&
      person.edad &&
      typeof person.edad == 'number' &&
      person.edad > 0
    )
      return true;
    return false;
  }
}

const usuari1 = new Usuarios(nombre, apellido);

uaurio1.getBook();

// const p2 = new Persona('pepe', 22);

// // console.dir(p1);

// p1.saludar();
// p2.saludar();

// // console.log(p1.nombre);

// // console.log(Persona.isPerson(obj));
