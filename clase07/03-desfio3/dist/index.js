"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var puerto = 8080;
var app = (0, _express["default"])();
var server = app.listen(puerto, function () {
  return console.log('Server Up en puerto', puerto);
});
server.on('error', function (err) {
  console.log('ERROR =>', err);
});
var visitas = 0; // EJERCICIO1: ENVIO DE UN HTML BASICO USANDO EXPRESS

app.get('/', function (request, response) {
  visitas++;

  var myfilePath = _path["default"].resolve(__dirname, './views/eje1.html');

  response.sendFile(myfilePath);
}); //EJERCICIO2

app.get('/visitas', function (request, response) {
  visitas++;
  response.json({
    msg: "Esta es la visita numero ".concat(visitas)
  });
}); //EJERCICIO3

app.get('/fyh', function (request, response) {
  visitas++;
  response.send({
    fyh: new Date()
  });
});