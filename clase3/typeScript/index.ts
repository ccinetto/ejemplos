const operacion = (a: number, b: number, op: string) => {
  return new Promise((resolve, reject) => {
    import('./misFunciones.js').then((modulo) => {
      if (op == 'suma') resolve(modulo.suma(a, b));
      else resolve(modulo.resta(a, b));
    });
  });
};

const operaciones = () => {
  operacion(2, 4, 'suma').then((resultado) => {
    console.log(resultado);
  });
  operacion(2, 4, 'resta').then((resultado) => {
    console.log(resultado);
  });
};

operaciones();
