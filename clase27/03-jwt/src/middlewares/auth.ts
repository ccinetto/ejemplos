import Config from '../config';
import { Request, Response, NextFunction } from 'express';
import { User, UserModel } from '../models/user';

const jwt = require('jsonwebtoken');

interface RequestUser extends Request {
  user?: User;
}

type TokenPayload = {
  userId: string;
};

export const generateAuthToken = async (user: User): Promise<string> => {
  //get the private key from the config file -> environment variable
  const payload: TokenPayload = {
    userId: user._id,
  };
  const token = await jwt.sign(payload, Config.TOKEN_SECRET_KEY, {
    expiresIn: '1h',
  });
  return token;
};

export const checkAuth = async (
  req: RequestUser,
  res: Response,
  next: NextFunction
) => {
  //get the token from the header if present
  const token = req.headers['x-auth-token'];

  if (!token) return res.status(401).json({ msg: 'Unauthorized' });

  try {
    const decode: TokenPayload = await jwt.verify(
      token,
      Config.TOKEN_SECRET_KEY
    );
    console.log('TOKEN DECODIFICADO');
    console.log(decode);

    const user = await UserModel.findById(decode.userId);

    if (!user) return res.status(400).json({ msg: 'Unauthorized' });

    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ msg: 'Unauthorized' });
  }
};
