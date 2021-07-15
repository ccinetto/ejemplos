const { Observable } = require('rxjs');

const funcionRara = (parametro) => {
  return new Observable((pub) => {
    let index = 0;

    while (index < parametro) {
      pub.next(`Te mando el dato numero ${index}`);
      index += 1;
    }

    pub.complete('Ya te mande todo');
  });
};

const handler = {
  next: (value) => console.log(`RECEIVE DATA => ${value}`),
  complete: (value) => console.log(`RECEIVE COMPLETE => ${value}`),
  error: (value) => console.log(`RECEIVE ERROR => ${value}`),
};

const sub = funcionRara(10);

sub.subscribe(handler);
