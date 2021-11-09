import asyncHandler from 'express-async-handler';
import { Router } from 'express';
import { UserController } from '../controllers/users';

const router = Router();

router.get('/:id?', asyncHandler(UserController.getUsers));

router.post(
  '/',
  UserController.validateUserInput,
  asyncHandler(UserController.addUser)
);

router.put('/', asyncHandler(UserController.updateUser));

router.delete('/', asyncHandler(UserController.deleteUser));

export default router;
