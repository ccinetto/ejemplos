const isDone: Boolean = true;

let decimal: Number = 10;

let palabra: String = 'Pepe';

let arr1: Array<Number> = [1, 2, 3, 4, 5];
let arr2: Array<String> = ['pepe', 'juan', 'Jacinto'];

interface Jugador {
  nombre: String;
  apellido: String;
  goles: Number;
  edad: Number;
  seleccion: Boolean;
}

const obj: Jugador = {
  nombre: 'Franco',
  apellido: 'Soldano',
  goles: 2500,
  edad: 26,
  seleccion: true,
};

console.log(obj);
