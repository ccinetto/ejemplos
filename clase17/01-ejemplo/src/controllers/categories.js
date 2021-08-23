import { DBService } from '../services/db';

const tableName = 'categorias';

class Categories {
  async getAllCategories(req, res) {
    console.log(this);
    const items = await DBService.get(tableName);

    res.json({
      data: items,
    });
  }

  async getCategoryById(req, res) {
    const { id } = req.params;

    const item = await DBService.get(tableName, id);

    if (!item.length)
      return res.status(404).json({
        msgs: 'Category not found!',
      });

    res.json({
      data: item,
    });
  }

  async createCategory(req, res) {
    const { nombre } = req.body;

    if (!nombre)
      return res.status(400).json({
        msg: 'Invalid Body',
      });

    const data = {
      nombre,
    };

    const id = await DBService.create(tableName, data);

    const newItem = await DBService.get(tableName, id);
    res.json({
      data: newItem,
    });
  }

  async updateCategory(req, res) {
    const { id } = req.params;
    const { nombre } = req.body;

    if (!nombre)
      return res.status(400).json({
        msg: 'Invalid Body',
      });

    let item = await DBService.get(tableName, id);

    if (!item.length)
      return res.status(404).json({
        msgs: 'Category not found!',
      });

    const data = {
      nombre,
    };

    await DBService.update(tableName, id, data);

    item = await DBService.get(tableName, id);
    res.json({
      msg: 'Category updated',
      item,
    });
  }

  async deleteCategory(req, res) {
    const { id } = req.params;

    let item = await DBService.get(tableName, id);

    if (!item.length)
      return res.status(404).json({
        msgs: 'Category not found!',
      });

    await DBService.delete(tableName, id);
    res.json({
      msg: 'Category deleted',
    });
  }
}

export const CategoriesController = new Categories();
