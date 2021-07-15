function* numeroRandom(min, max) {
  let contador = 0;
  while (true) {
    console.log(`CONTEXTO => Contador = ${contador}`);
    contador++;
    yield Math.floor(Math.random() * (max - min) + min);
  }
}

const numRandomObj = numeroRandom(0, 1000);
console.log(numRandomObj);

const resultado = numRandomObj.next();
console.log(resultado);
const num1 = resultado.value;
console.log(num1);

const num2 = numRandomObj.next().value;
console.log(num2);

const num3 = numRandomObj.next().value;
console.log(num3);

const num4 = numRandomObj.next().value;
console.log(num4);
