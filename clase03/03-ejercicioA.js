const delay = (ret) => {
  for (let i = 0n; i < 100000000000000000000000000000000000000000000n; i++);
};

function hacerTarea(num) {
  console.log(new Date(), 'Haciendo Tarea', num);
  delay(100);
}

console.log('Inicio Tareas');
hacerTarea(1);
hacerTarea(2);
hacerTarea(3);
hacerTarea(4);
console.log('Fin Tareas');
console.log('Otras Tareas');
