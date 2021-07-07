const salarios = {
  juan: 1000,
  pepe: 2500,
  felipe: 3000,
  franco: 3700,
};

console.log(Object.entries(salarios));

const array = Object.entries(salarios).map(([key, value]) => [key, value * 2]);

console.log(array);
const newObj = Object.fromEntries(array);

console.log(newObj);
