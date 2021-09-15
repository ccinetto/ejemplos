import { Request, Response, NextFunction } from 'express';
import { productsAPI } from '../apis/productos';

class Producto {
  checkAddProducts(req: Request, res: Response, next: NextFunction) {
    const { nombre, precio } = req.body;

    if (!nombre || !precio || typeof nombre !== 'string' || isNaN(precio)) {
      return res.status(400).json({
        msg: 'Campos del body invalidos',
      });
    }

    next();
  }

  async checkProductExists(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const producto = await productsAPI.getProducts(id);

    if (!producto) {
      return res.status(404).json({
        msg: 'producto not found',
      });
    }
    next();
  }

  async getProducts(req: Request, res: Response) {
    const id = req.params.id;

    const producto = id
      ? await productsAPI.getProducts(id)
      : await productsAPI.getProducts();

    res.json({
      data: producto,
    });
  }

  async addProducts(req: Request, res: Response) {
    const newItem = await productsAPI.addProduct(req.body);

    res.json({
      msg: 'producto agregado con exito',
      data: newItem,
    });
  }

  async updateProducts(req: Request, res: Response) {
    const id = req.params.id;

    const updatedItem = await productsAPI.updateProduct(id, req.body);

    res.json({
      msg: 'actualizando producto',
      data: updatedItem,
    });
  }

  async deleteProducts(req: Request, res: Response) {
    const id = req.params.id;
    await productsAPI.deleteProduct(id);
    res.json({
      msg: 'producto borrado',
    });
  }
}

export const productsController = new Producto();
