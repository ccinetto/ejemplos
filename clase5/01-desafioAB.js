const between = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const salida = {};
for (let i = 0; i < 10000; i++) {
  const data = between(1, 20);

  if (salida[data]) salida[data] += 1;
  else salida[data] = 1;
}

console.log(salida);
