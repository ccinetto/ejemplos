function* numeroRandom(min, max) {
  let contador = 0;
  while (true) {
    console.log(`CONTEXTO => Contador = ${contador}`);
    contador++;
    const output = {
      counter: contador,
      result: Math.floor(Math.random() * (max - min) + min),
    };
    yield output;
  }
}

const numRandomObj = numeroRandom(0, 1000);

for (let call of numRandomObj) {
  const data = call;
  console.log(data);
  if (data.result > 800 || data.counter >= 10) break;
}

console.log('Fin');
