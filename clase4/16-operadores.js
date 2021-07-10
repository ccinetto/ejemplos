const { Observable } = require('rxjs');
const { map, filter } = require('rxjs/operators');

const miObservable = new Observable((observer) => {
  let count = 0;
  const interval = setInterval(() => {
    observer.next(count++);
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
    map((data) => data ** 2),
    filter((data) => data > 30)
  )
  .subscribe((value) => console.log(value));
