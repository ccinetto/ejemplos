interface Persona {
  nombre: string;
  edad: number;

  saludar(): string;
  saludarConPromesa(): Promise<string>;
}

class Tenista implements Persona {
  nombre;
  edad;
  titulos;
  saludo: string;

  constructor(nombre: string, edad: number, titulos: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.titulos = titulos;
    this.saludo = `Hola soy ${this.nombre}, tengo ${this.edad} años. Soy tenista y tengo ${this.titulos} titulos`;
  }

  saludar() {
    return this.saludo;
  }

  saludarConPromesa() {
    return new Promise<string>((resolve) => {
      setTimeout(() => resolve(this.saludo), 5000);
    });
  }
}

class Programador implements Persona {
  nombre;
  edad;
  lenguage;
  experiencia;

  constructor(
    nombre: string,
    edad: number,
    experiencia: number,
    lenguage: string
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.lenguage = lenguage;
    this.experiencia = experiencia;
  }

  saludar() {
    const saludo = `Hola soy ${this.nombre}, tengo ${this.edad} años. Soy ${Programador.name} en ${this.lenguage} y tengo ${this.experiencia} años de experiencia`;

    return '2';
  }

  saludarConPromesa() {
    return new Promise<string>((resolve) => {
      setTimeout(() => resolve('aguante typescript'), 5000);
    });
  }
}

const tenisPlayer1 = new Tenista('David Nalbandian', 33, 40);
const programmer1 = new Programador('Mark Zucaritas', 28, 5, 'javascript');

console.log(tenisPlayer1.saludar());

console.log(programmer1.saludar());

tenisPlayer1.saludarConPromesa().then((data) => console.log(data));
programmer1.saludarConPromesa().then((data) => console.log(data));
