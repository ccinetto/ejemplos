const between = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const dato1 = between(100, 300);
const dato2 = between(100, 300);
const dato3 = between(100, 300);
const dato4 = between(100, 300);
const dato5 = between(100, 300);

console.log(dato1, dato2, dato3, dato4, dato5);
