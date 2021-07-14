const { Observable } = require('rxjs');
const { map } = require('rxjs/operators');

const miObservable = new Observable((observer) => {
  let count = 0;
  const interval = setInterval(() => {
    count += 1;
    observer.next(count);
  }, 1000);

  // once we stop listening to values clear the interval
  return () => {
    console.log(`Me llamaron`);
    //Probar comentando y descomentando el clearInterval
    clearInterval(interval);
  };
});

miObservable
  .pipe(
    map((data) => {
      // console.log('RECIBI EL DATO', data);
      // console.log('VOY A TRANSFORMARLO A', data ** 2);
      return data ** 2;
    })
  )
  .subscribe((value) => console.log(value));
