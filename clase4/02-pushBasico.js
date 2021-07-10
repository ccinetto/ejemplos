const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Dato');
  }, 5000);
});

miPromesa.then((data) => console.log(data));
