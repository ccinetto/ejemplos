// //CASO 1: Exportacion multiple. Se usa export
// export const sumar = (a, b) => a + b;
// export const restar = (a, b) => a - b;

//CASO 2: Exportacion Unica. Se usa default
const objetoGenerico = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b,
};

export default objetoGenerico;
