"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var puerto = 6000;
var app = (0, _express["default"])();
var server = app.listen(puerto, function () {
  return console.log('Server Up en puerto', puerto);
});
server.on('error', function (err) {
  console.log('ERROR =>', err);
}); // ENVIO DE UN HTML BASICO USANDO EXPRESS

app.get('/mihtml', function (request, response) {
  var myfilePath = _path["default"].resolve(__dirname, './views/vista1.html');

  response.sendFile(myfilePath);
}); // //RESPUESTA EN FORMATO JSON (API)
// app.get('/', (request, response) => {
//   console.log(request.query);
//   response.json({
//     msg: 'Hola Mundo desde el main',
//   });
// });
//RESPUESTA EN FORMATO JSON (API)

app.post('/api/holamundo', function (request, response) {
  response.json({
    msg: 'Hola Mundo desde /api/holamundo'
  });
});