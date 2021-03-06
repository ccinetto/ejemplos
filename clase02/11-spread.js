const funcNueva = (obj) => {
  const { nombre, appelido, goles, pepito } = obj;
  console.log(pepito);
  console.log(`HOLA, me llamo ${nombre} ${appelido} y tengo ${goles} goles `);
};

const funcVieja = (obj) => {
  const nombre = obj.nombre;
  const apellido = obj.apellido;
  const goles = obj.goles;

  console.log(`HOLA, me llamo ${nombre} ${apellido} y tengo ${goles} goles `);
};

const obj1 = {
  nombre: 'Franco',
  appelido: 'Soldano',
  goles: 2500,
  equipos: ['Real Madrid', 'Juventus', 'Boca Juniors'],
  jugadorSelecion: true,
};

// funcVieja(obj1);
// funcNueva(obj1);

// //CASO 2, REUTILIZAR DATA DE UN OBJETO PARA CREAR OTRO MAS COMPLETO

// const nuevoObjeto = {
//   ...obj1,
//   edad: 25,
//   jugadorSelecion: false,
// };

// console.log(nuevoObjeto);

//CASO 3. TRATAR NUMERO INDETERMINADO DE ARGUMENTOS

const miFuncion = (...argumentos) => {
  console.log(argumentos);

  argumentos.forEach((unArgumento) => console.log(unArgumento));
};

miFuncion('casa', 2, 3, 4, 5, 6, 25, '00303', [1, 23]);

// const func = (...argumentos) => {
//   console.log(argumentos);
// };

// func(1, 2, 3, 'pepe', 'juan', 4, 5, 6, 7, 8, 9, 10);
