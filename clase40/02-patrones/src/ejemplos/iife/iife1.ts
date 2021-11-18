const modularPattern = (function () {
  let sum = 0;

  return {
    add: function () {
      sum = sum + 1;
      return sum;
    },
    reset: function () {
      return (sum = 0);
    },
  };
})();

export const EjemploIIFE1 = () => {
  // /**Notar que si descomentamos esto typescript nos dice que no existe */
  // console.log(modularPattern.sum);
  console.log(modularPattern.add()); // console.logs: 1
  console.log(modularPattern.add()); // console.logs: 2
  console.log(modularPattern.reset()); // console.logs: 0
};
