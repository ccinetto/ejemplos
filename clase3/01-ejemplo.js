//EJEMPLOS DE PASAJE DE FUNCIONES COMO PARAMETRO A OTRAS FUNCIONES

const func1 = (aValue) => {
  if (aValue ** 2 < 10) return false;

  return true;
};

const array = [1, 2, 3, 4, 5];

const s1 = array.filter(func1);

console.log(s1);

const s2 = array.map((aValue) => aValue ** 2);

console.log(s2);
