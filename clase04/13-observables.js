const { Observable } = require('rxjs');

const miObservable = new Observable((pepito) => {
  console.log(pepito);
  let index = 0;
  setInterval(() => {
    index += 1;
    pepito.next(`Te entrega el dato ${index}`);
  }, 2000);
});

miObservable.subscribe((value) => console.log(value));
