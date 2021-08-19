import { Router } from 'express';
import { socketService } from '../services/socket';
import { recurso2Service } from '../services/recurso2';
const miRouter = Router();

miRouter.get('/', (req, res) => {
  res.json({
    msg: 'LLAMADO GET RECURSO 2',
    data: recurso2Service.leer(),
  });
});

miRouter.post('/', (req, res) => {
  const body = req.body;
  console.log(body);

  /** VAMOS A GUARDAR MI NUEVO RECURSO */
  const newItem = recurso2Service.agregar(body);

  /** YA GUARDADO EL RECURSO, QUIERO AVISARLES A TODOS MIS CLIENTES
   * SOCKETS QUE TENGO UN RECURSO NUEVO
   */

  const myWSServer = socketService.getServer();

  const myData = {
    newItem,
  };
  myWSServer.emit('nuevoRecurso2', myData);

  res.json({
    msg: 'Ya guarde el producto y le mande a todos por socket la info',
  });
});

export default miRouter;
