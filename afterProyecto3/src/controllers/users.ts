import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { UserAPI } from '../apis/users';
import { userJoiSchema } from '../models/users/users.interface';

class User {
  async validateUserInput(req: Request, res: Response, next: NextFunction) {
    try {
      await userJoiSchema.validateAsync(req.body);

      const { username, email } = req.body;

      const user = await UserAPI.query(username, email);
      if (!user) next();
      else res.status(400).json({ msg: 'invalid username or email' });
    } catch (err) {
      if (err instanceof Error) res.status(400).json({ msg: err.message });
    }
  }

  async getUsers(req: Request, res: Response) {
    const data = await UserAPI.getUsers(req.params.id);

    res.json({ msg: 'GET USERS', data });
  }

  async addUser(req: Request, res: Response) {
    const newItem = await UserAPI.addUser(req.body);
    res.json({ msg: 'ADD USER', newItem });
  }

  async updateUser(req: Request, res: Response) {
    res.json({ msg: 'UPDATE USER' });
  }

  async deleteUser(req: Request, res: Response) {
    res.json({ msg: 'DELETE USER' });
  }
}

export const UserController = new User();
