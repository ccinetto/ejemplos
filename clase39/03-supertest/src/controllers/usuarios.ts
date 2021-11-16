import { UsuarioI, User } from '../model/usuarios';
import Joi, { ValidationError } from 'joi';
import { Request, Response, NextFunction } from 'express';
interface JoiValidation {
  result: boolean;
  error?: ValidationError;
}
class UserClass {
  validar(req: Request, res: Response, next: NextFunction) {
    const usuarioSchema = Joi.object({
      nombre: Joi.string().alphanum().required(),
      email: Joi.string().email().required(),
    });

    const { error } = usuarioSchema.validate(req.body);
    if (error) res.status(400).json({ msg: 'invalid body params' });
    else next();
  }

  async getUser(req: Request, res: Response) {
    let { id } = req.params;
    let data: UsuarioI[] = [];
    if (id && id.match(/^[0-9a-fA-F]{24}$/)) {
      const user = await User.findById(id);
      if (user) data.push(user);
    } else data = await User.find();

    if (id && !data.length) res.status(404).json({ msg: 'User not found' });
    else res.json({ data });
  }

  async createUser(req: Request, res: Response) {
    let usuario = req.body;
    const usuarioNuevo = new User(usuario);
    await usuarioNuevo.save();
    res.json({ usuarioNuevo });
  }

  async updateUser(req: Request, res: Response) {
    let { id } = req.params;
    let usuario = req.body;

    await User.findByIdAndUpdate(id, usuario);
    const updatedUser = await User.findById(id);
    res.json({ updatedUser });
  }

  async deleteUser(req: Request, res: Response) {
    let { id } = req.params;

    await User.deleteOne({ _id: id });
    res.send({ msg: 'ok' });
  }
}

export const UserController = new UserClass();
