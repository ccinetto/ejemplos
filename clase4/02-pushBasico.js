const between = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const miDato = between(50, 2000);
    resolve(miDato);
  }, 3000);
});

miPromesa.then((data) => console.log(data));
