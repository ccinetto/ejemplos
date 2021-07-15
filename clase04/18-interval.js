const { interval } = require('rxjs');

const observable = interval(2000);

const subs = observable.subscribe((x) => console.log(x));
