function* numeroRandom(min, max) {
  let contador = 0;
  while (true) {
    console.log(`CONTEXTO => Contador = ${contador}`);
    contador++;
    const output = {
      fyh: new Date(),
      counter: contador,
      result: Math.floor(Math.random() * (max - min) + min),
    };
    yield output;
  }
}

const numRandomObj = numeroRandom(0, 1000);

for (let pepito of numRandomObj) {
  const data = pepito;
  console.log(data);
  if (data.result > 1100 || data.counter >= 10) break;
}

console.log('Fin');
