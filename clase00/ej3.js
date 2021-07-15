const objeto = {
  meses: [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ],
  obtenerMeses: function () {
    return this.meses;
  },
  getNumeroMes: function (nombreMes) {
    const result = this.meses.indexOf(nombreMes, 0) + 1;
    return result;
  },
  getLetrasMes: function (numLetras) {
    let result = '';
    this.meses.forEach((aMes) => {
      result += aMes.substr(0, numLetras);
    });
    return result;
  },
};

console.log(objeto.obtenerMeses());
console.log(objeto.getNumeroMes('diciembre'));
console.log(objeto.getLetrasMes(2));
