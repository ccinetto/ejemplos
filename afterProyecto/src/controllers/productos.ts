import {Request, Response, NextFunction} from 'express';
import {productsPersistencia} from '../persistencia/productos';

class Producto {

  getProducts (req : Request, res : Response) {
    const id = Number(req.params.id);

    if(id){
      const producto = productsPersistencia.get(id);
      console.log(producto);

      if(!producto)
        return res.status(404).json({
          msg: "Producto no encontrado"
        })
    
      return res.json({
        data: producto
      })
    }

    res.json({
      data: productsPersistencia.get(),
    })
  }

  checkAddProducts(req: Request, res: Response, next: NextFunction) {
    const {nombre, precio} = req.body

    if(!nombre || !precio || typeof nombre !== 'string' || isNaN(precio)){
      return res.status(400).json({
        msg: "Campos del body invalidos"
      })
    }

    next();
  }

  addProducts (req : Request, res : Response) {
    const newItem = productsPersistencia.add(req.body);

    res.json({
      msg: "producto agregado con exito",
      data: newItem
    })
  }

  updateProducts (req : Request, res : Response) {
    res.json({
      msg: "actualizando producto",
    })
  }

  deleteProducts (req : Request, res : Response) {
    const id = Number(req.params.id);

    const producto = productsPersistencia.find(id);

    if(!producto){
      return res.status(404).json({
        msg: "producto not found",
      })
    }

    productsPersistencia.delete(id);
    res.json({
      msg: "producto borrado",
    })
  }
}


export const productsController = new Producto();