/**
 * Probar con node dist/index.js --op=* --n1=4 --n2=5
 */

import minimist from 'minimist';

export const ejemploMinimist = () => {
  const args = minimist(process.argv);
  console.log(args);
  let { op, n1, n2 } = args;

  let operando1 = parseFloat(n1);
  let operando2 = parseFloat(n2);

  const operaciones: any = {
    '+': operando1 + operando2,
    '-': operando1 - operando2,
    '*': operando1 * operando2,
    '/': operando1 / operando2,
  };

  const output = operaciones[op] || 'wrong op parameter';

  console.log(output);
};
