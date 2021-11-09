import { UserI } from '../../src/models/users/users.interface';

declare global {
  namespace Express {
    interface Request {
      user?: UserI;
    }
  }
}
