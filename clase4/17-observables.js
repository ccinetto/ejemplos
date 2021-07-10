const { Observable } = require('rxjs');

const miObservable = new Observable((observer) => {
  observer.next('Dato1');
  observer.next('Dato2');
  observer.next('Dato3');
  observer.next('Dato4');
  observer.next('Dato5');

  setTimeout(() => {
    observer.complete('Hello from a Observable!');
  }, 2000);

  // Probar comentando y descomentando esta linea
  // observer.error('Me rompi');
});

const handler = {
  next: (value) => console.log(`RECEIVE DATA => ${value}`),
  complete: (value) => console.log(`RECEIVE COMPLETE => ${value}`),
  error: (value) => console.log(`RECEIVE ERROR => ${value}`),
};

miObservable.subscribe(handler);
