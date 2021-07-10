const promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('dato1');
  }, 2000);
});

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('dato2');
  }, 1000);
});

const promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('dato3');
  }, 3000);
});

const promesa4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error4');
  }, 500);
});

const arrayDePromesa = [promesa1, promesa2, promesa3];
const arrayDePromesa2 = [promesa1, promesa2, promesa3, promesa4];

//CASO 1, Sale todo bien
// Promise.all(arrayDePromesa)
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => {
//     console.log('HUBO un ERROR');
//     console.log(err);
//   });

// //Caso 2, Una promesa del array termina mal
// Promise.all(arrayDePromesa2)
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => {
//     console.log('HUBO un ERROR');
//     console.log(err);
//   });

// //Caso 3, Caso anterior pero con allSettled. por mas que falle una, la idea es devolver tood bien
// Promise.allSettled(arrayDePromesa2)
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => {
//     console.log('HUBO un ERROR');
//     console.log(err);
//   });

//Caso 3, Caso anterior pero con allSettled. por mas que falle una, la idea es devolver tood bien
Promise.race(arrayDePromesa2)
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log('HUBO un ERROR');
    console.log(err);
  });
