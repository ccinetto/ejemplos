import { Router } from 'express';
import { ProductController } from '../models/products/products.controller';
import asyncHandler from 'express-async-handler';

const router = Router();

router.get(
  '/',
  asyncHandler(ProductController.getProducts.bind(ProductController))
);

router.get(
  '/:id',
  ProductController.exists.bind(ProductController),
  asyncHandler(ProductController.getProductById.bind(ProductController))
);

router.post(
  '/',
  ProductController.validate.bind(ProductController),
  asyncHandler(ProductController.addProducts.bind(ProductController))
);

router.put(
  '/:id',
  ProductController.exists.bind(ProductController),
  ProductController.validate.bind(ProductController),
  asyncHandler(ProductController.updateProducts.bind(ProductController))
);

router.delete(
  '/:id',
  ProductController.exists.bind(ProductController),
  asyncHandler(ProductController.deleteProducts.bind(ProductController))
);

export default router;
