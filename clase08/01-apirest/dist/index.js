"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * DATOS A MANIPULAR
 */
var productos = [{
  id: 1,
  nombre: 'Escuadra',
  precio: 200
}, {
  id: 2,
  nombre: 'Transportador',
  precio: 50
}];
/** INICIALIZACION API con EXPRESS */

var app = (0, _express["default"])();
var puerto = 8080;
var server = app.listen(puerto, function () {
  return console.log('Server up en puerto', puerto);
});
server.on('error', function (err) {
  console.log('ERROR ATAJADO', err);
});
/**
 * DEFINICION RUTAS BASICAS
 */

/**
 * 01- GET General: Para obtener todos los Recursos
 * Ejecutando operacion de lectura de todos los productos
 * Vamos a responder con todos los productos que tenemos actualmente
 */

app.get('/productos', function (req, res) {
  /**Opcionalmente podemos agregar queryes para hacer busquedas distintas y no traer todo*/
  var filtroPrecio = req.query.price;
  var data;
  console.log(filtroPrecio);
  if (filtroPrecio) data = productos.filter(function (aProduct) {
    return aProduct.precio >= Number(filtroPrecio);
  });else data = productos;
  res.json({
    data: data
  });
});
/**
 * 02- GET Especifico: Para obtener un recurso especifico
 * Ejecutando operacion de lectura de un producto en particular
 * Obtenemos el id que el cliente desea de la request
 */

app.get('/productos/:id', function (req, res) {
  console.log(req.params);
  var idBuscado = req.params.id;
  var producto = productos.find(function (aProduct) {
    return aProduct.id == idBuscado;
  });
  /** En caso de no encontrar el producto, respondemos con codigo 404 para indicar el error */

  if (!producto) {
    return res.status(404).json({
      msg: 'Product not found'
    });
  }
  /**Si encontramso el producto respondemos con su informacion */


  res.json({
    data: producto
  });
});
/**
 * 03- POST : Creacion de un nuevo recurso
 * Ejecutando operacion de creacion de un nuevo recurso
 * Obtenemos la informacion del Body de la request
 * Para trabajar con el body se debe agregar
 *  - app.use(express.json()): para indicar que el body viene como JSON
 *  - app.use(express.urlencoded({ extended: true })) : Para decirle que puede venir info como no string
 */

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.post('/productos', function (req, res) {
  var body = req.body;
  console.log(body);
  /** Valido que la info que me mandaron este OK, sino respondo con 400 */

  if (!body.nombre || !body.precio || typeof body.nombre != 'string' || typeof body.precio != 'number') {
    return res.status(400).json({
      msg: 'Necesito en el body el nombre (string) y el precio (number)'
    });
  }

  var nuevoProducto = {
    id: productos.length + 1,
    nombre: body.nombre,
    precio: body.precio
  };
  productos.push(nuevoProducto);
  /**Estado 201: Objeto creado correctamente */

  res.status(201).json({
    data: nuevoProducto
  });
});
/** 04- PUT/PATCH : Modificar los datos de un recurso existente */

app.put('/productos/:id', function (req, res) {
  console.log(req.params);
  var idBuscado = Number(req.params.id);
  var body = req.body;
  /**The indexOf() method returns the first index at which a given element can be found
   * in the array, or -1 if it is not present.
   * indexOf() compares searchElement to elements of the Array using strict equality
   * (the same method used by the === or triple-equals operator).
   * */

  var posicion = productos.map(function (aProduct) {
    return aProduct.id;
  }).indexOf(idBuscado);
  console.log(posicion);
  /** En caso de no encontrar el producto, respondemos con codigo 404 para indicar el error */

  if (posicion == -1) {
    return res.status(404).json({
      msg: 'Product not found'
    });
  }
  /** Valido que la info que me mandaron este OK, sino respondo con 400 */


  if (!body.nombre || !body.precio || typeof body.nombre != 'string' || typeof body.precio != 'number') {
    return res.status(400).json({
      msg: 'Necesito en el body el nombre (string) y el precio (number)'
    });
  }

  productos[posicion].nombre = body.nombre;
  productos[posicion].precio = body.precio;
  /**Estado 201: Objeto creado correctamente */

  res.status(201).json({
    data: productos[posicion]
  });
});
/** 05- DELETE : Modificar los datos de un recurso existente */

app["delete"]('/productos/:id', function (req, res) {
  console.log(req.params);
  var idBuscado = Number(req.params.id);
  var newProducts = productos.filter(function (aProduct) {
    return aProduct.id !== idBuscado;
  });
  productos = newProducts;
  res.json({
    data: productos
  });
});
/** 06- QUERYES : Se pueden hacer consultas para obtener datos en funcion de una query */

app.get('/productos/find', function (req, res) {
  console.log(req.query);
  res.json({
    data: productos
  });
});