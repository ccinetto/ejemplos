import { Request, Response, NextFunction } from 'express';

const admin = true;

export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  console.log('EJECUTANDO MIDDLEWARE');
  if (admin) next();
  else {
    res.status(401).json({
      msg: 'No estas autorizado',
    });
  }
};
