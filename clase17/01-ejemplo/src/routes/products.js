import { Router } from 'express';
import { ProductsController } from '../controllers/products';
import { catchAsync } from '../utils/catchAsync';
const router = Router();

router.get('/', ProductsController.getAllProducts);

router.get('/:id', ProductsController.getProductById);

router.post('/', catchAsync(ProductsController.createProduct));

router.put('/:id', ProductsController.updateProduct);

router.delete('/:id', ProductsController.deleteProduct);

export default router;
