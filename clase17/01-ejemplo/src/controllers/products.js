import { DBService } from '../services/db';

const tableName = 'productos';

class Products {
  async getAllProducts(req, res) {
    const items = await DBService.get(tableName);

    res.json({
      data: items,
    });
  }

  async getProductById(req, res) {
    const { id } = req.params;

    const item = await DBService.get(tableName, id);

    if (!item.length)
      return res.status(404).json({
        msgs: 'Product not found!',
      });

    res.json({
      data: item,
    });
  }

  async createProduct(req, res) {
    const { nombre, descripcion, stock, precio, category_id } = req.body;

    if (!nombre || !descripcion || !stock || !precio || !category_id)
      return res.status(400).json({
        msg: 'missing Body fields',
      });

    const data = {
      nombre,
      descripcion,
      stock,
      precio,
      category_id,
    };

    const newId = await DBService.create(tableName, data);

    const newProduct = await DBService.get(tableName, newId);

    res.json({
      data: newProduct,
    });
  }

  async updateProduct(req, res) {
    const { id } = req.params;
    const { nombre, descripcion, stock, precio, category_id } = req.body;

    if (!nombre || !descripcion || !stock || !precio || !category_id)
      return res.status(400).json({
        msg: 'missing Body fields',
      });

    let item = await DBService.get(tableName, id);

    if (!item.length)
      return res.status(404).json({
        msgs: 'Product not found!',
      });

    const data = {
      nombre,
      descripcion,
      stock,
      precio,
      category_id,
    };

    await DBService.update(tableName, id, data);

    item = await DBService.get(tableName, id);
    res.json({
      msg: 'Category updated',
      item,
    });
  }

  async deleteProduct(req, res) {
    res.json({
      msg: 'product deleted',
    });
  }
}

export const ProductsController = new Products();
