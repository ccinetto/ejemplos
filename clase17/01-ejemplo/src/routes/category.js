import { Router } from 'express';
import { CategoriesController } from '../controllers/categories';
const router = Router();

router.get('/', CategoriesController.getAllCategories);

router.get('/:id', CategoriesController.getCategoryById);

router.post('/', CategoriesController.createCategory);

router.put('/:id', CategoriesController.updateCategory);

router.delete('/:id', CategoriesController.deleteCategory);

export default router;
