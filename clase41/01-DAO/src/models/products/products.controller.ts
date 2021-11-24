import ProductosDaoDB from './products.dao';
import { NextFunction, Request, Response } from 'express';
import { ProductJoiSchema } from './products.schema';
import { ValidationResult } from 'joi';

class Products {
  productosDao: ProductosDaoDB;

  constructor() {
    this.productosDao = new ProductosDaoDB();
  }

  async exists(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const result = await this.productosDao.get(id);
    if (!result.length) {
      res.status(404).json({
        data: 'objeto no encontrado',
      });
    } else next();
  }

  validate(req: Request, res: Response, next: NextFunction) {
    const result: ValidationResult = ProductJoiSchema.validate(req.body);

    if (result.error) {
      res.status(400).json({
        msg: 'Invalid Body Parameter',
        error: result.error.details.map((a) => a.message),
      });
    } else next();
  }

  async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    res.json({
      data: await this.productosDao.get(id),
    });
  }

  async getProducts(req: Request, res: Response) {
    res.json({
      data: await this.productosDao.get(),
    });
  }

  async addProducts(req: Request, res: Response) {
    const newItem = await this.productosDao.add(req.body);

    res.json({
      msg: 'producto agregado con exito',
      data: newItem,
    });
  }

  async updateProducts(req: Request, res: Response) {
    const id = req.params.id;

    const updatedItem = await this.productosDao.update(id, req.body);

    res.json({
      msg: 'actualizando producto',
      data: updatedItem,
    });
  }

  async deleteProducts(req: Request, res: Response) {
    const { id } = req.params;
    await this.productosDao.delete(id);
    res.json({
      msg: 'producto borrado',
    });
  }
}

export const ProductController = new Products();
