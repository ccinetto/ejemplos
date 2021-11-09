import asyncHandler from 'express-async-handler';
import { Router } from 'express';
import { CartController } from '../controllers/carts';
import { isLoggedIn } from '../middleware/admin';
const router = Router();

router.get('/', asyncHandler(CartController.getCartByUser));

router.post('/add', asyncHandler(CartController.addProduct));

router.post('/delete', asyncHandler(CartController.deleteProduct));

// Crean documento orders
// Sacan snapshot del carrito tal como esta y lo agregan a la orden
//le ponen en la orden info del usuario
// Vacian carrito
//Mandan mensajitos
router.post('submit');

export default router;
