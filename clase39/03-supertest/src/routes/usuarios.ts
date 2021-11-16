import { Router } from 'express';
import { UserController } from '../controllers/usuarios';
import { User } from '../model/usuarios';
import { UsuarioI } from '../model/usuarios';
export const userRouter = Router();
import asyncHandler from 'express-async-handler';

userRouter.get('/:id?', asyncHandler(UserController.getUser));

userRouter.post(
  '/',
  UserController.validar,
  asyncHandler(UserController.createUser)
);

userRouter.put('/:id', asyncHandler(UserController.updateUser));

userRouter.delete('/:id', async (req, res) => {
  let { id } = req.params;

  await User.deleteOne({ _id: id });
  res.send({ msg: 'ok' });
});
