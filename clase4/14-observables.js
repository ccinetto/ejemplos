const { Observable } = require('rxjs');

const interval = new Observable((observer) => {
  let count = 0;
  const interval = setInterval(() => {
    count += 1;
    observer.complete(count);
  }, 1000);

  // once we stop listening to values clear the interval
  return () => {
    console.log(`Me llamaron`);
    //Probar comentando y descomentando el clearInterval
    clearInterval(interval);
  };
});

const subscription = interval.subscribe((value) => {
  console.log(value);
  if (value >= 5) subscription.unsubscribe();
});
