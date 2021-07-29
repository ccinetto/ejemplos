"use strict";

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// require
var miCumple = (0, _moment["default"])('07-11-1993', 'DD-MM-YYYY');
var now = (0, _moment["default"])();
console.log('Hoy es', now.format('DD-MM-YYYY'));
console.log('Naci el', miCumple.format('DD-MM-YYYY'));
var diferenciaDias = now.diff(miCumple, 'days');
var diferenciaAnios = now.diff(miCumple, 'years');
console.log("Desde mi nacimiento han pasado ".concat(diferenciaAnios, " a\xF1os"));
console.log("Desde mi nacimiento han pasado ".concat(diferenciaDias, " dias"));