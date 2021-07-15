const fin = () => {
  console.log('Termine');
};

const mostrarLetras = (palabra, funcion, intervalo = 1000) => {
  let contador = 0;
  return new Promise((resolve, reject) => {
    let timer = setInterval(() => {
      if (palabra[contador]) {
        console.log(palabra[contador]);
        contador++;
      } else {
        clearInterval(timer);
        funcion();
        resolve();
      }
    }, intervalo);
  });
};

// const tiempo = 200;

mostrarLetras('HOLA', fin)
  .then(() => mostrarLetras('CHAU', fin))
  .then(() => mostrarLetras('QUETAL', fin));
