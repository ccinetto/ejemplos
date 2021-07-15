var Fecha = '25/02/2020';

function AgregarHora(f) {
  f = f + ' 17:00:00';
}

AgregarHora(Fecha);
console.log(Fecha);

var fecha = ['25/02/2020'];

function AgregarHora2(f) {
  f[0] = f[0] + ' 17:00:00';
}

AgregarHora2(fecha);
console.log(fecha);
