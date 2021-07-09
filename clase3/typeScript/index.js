var operacion = function (a, b, op) {
    return new Promise(function (resolve, reject) {
        Promise.resolve().then(function () { return require('./misFunciones.js'); }).then(function (modulo) {
            if (op == 'suma')
                resolve(modulo.suma(a, b));
            else
                resolve(modulo.resta(a, b));
        });
    });
};
var operaciones = function () {
    operacion(2, 4, 'suma').then(function (resultado) {
        console.log(resultado);
    });
    operacion(2, 4, 'resta').then(function (resultado) {
        console.log(resultado);
    });
};
operaciones();
