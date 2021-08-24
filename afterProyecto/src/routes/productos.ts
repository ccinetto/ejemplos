import { Router } from 'express';
import { productsController } from '../controllers/productos';
import { checkAdmin } from '../middleware/admin';

const router = Router();

router.get('/', productsController.getProducts);

router.get(
  '/:id',
  productsController.checkProductExists,
  productsController.getProducts
);

router.post(
  '/',
  checkAdmin,
  productsController.checkAddProducts,
  productsController.addProducts
);

router.put(
  '/:id',
  checkAdmin,
  productsController.checkProductExists,
  productsController.updateProducts
);

router.delete(
  '/:id',
  checkAdmin,
  productsController.checkProductExists,
  productsController.deleteProducts
);

export default router;
