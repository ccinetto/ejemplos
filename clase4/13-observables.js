const { Observable } = require('rxjs');

const miObservable = new Observable((pepito) => {
  console.log(pepito);
  setInterval(() => {
    pepito.next('Hello from a Observable!');
  }, 2000);
});

miObservable.subscribe((value) => console.log(value));
