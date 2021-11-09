import passport from 'passport';
import {
  Strategy,
  VerifyFunctionWithRequest,
  IStrategyOptionsWithRequest,
} from 'passport-local';
import { Request, Response, NextFunction } from 'express';
import { UserAPI } from '../apis/users';
import { userJoiSchema } from '../models/users/users.interface';
import { Logger } from '../services/logger';

const admin = true;

export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  Logger.info('EJECUTANDO MIDDLEWARE');
  if (admin) next();
  else {
    res.status(401).json({
      msg: 'No estas autorizado',
    });
  }
};

const strategyOptions: IStrategyOptionsWithRequest = {
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
};

const loginFunc: VerifyFunctionWithRequest = async (
  req,
  username,
  password,
  done
) => {
  const user = await UserAPI.query(username);

  if (!user) {
    Logger.warn(`Login Fail for username ${username}: User does not exist`);
    return done(null, false, { message: 'User does not exist' });
  }

  const check = await UserAPI.ValidatePassword(username, password);

  if (!check) {
    Logger.warn('Login Fail for username ${username}: Password is not valid');
    return done(null, false, { message: 'Password is not valid.' });
  }

  Logger.info(`User ${username} logged in at ${new Date()}`);
  return done(null, user);
};

const signUpFunc: VerifyFunctionWithRequest = async (
  req,
  username,
  password,
  done
) => {
  try {
    await userJoiSchema.validateAsync(req.body);

    const { email } = req.body;
    const user = await UserAPI.query(username, email);

    if (user) {
      Logger.warn(
        `Signup Fail for username ${username}: Username or email already exists`
      );
      return done(null, {
        error: `Invalid Username/email`,
      });
    } else {
      const newUser = await UserAPI.addUser(req.body);
      return done(null, newUser);
    }
  } catch (err) {
    if (err instanceof Error) {
      Logger.error(err.message);
      return done(null, {
        error: err.message,
      });
    }
  }
};

passport.use('login', new Strategy(strategyOptions, loginFunc));
passport.use('signup', new Strategy(strategyOptions, signUpFunc));

passport.serializeUser((user: any, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (userId: string, done) => {
  try {
    const result = await UserAPI.getUsers(userId);
    done(null, result[0]);
  } catch (err) {
    done(err);
  }
});

export const isLoggedIn = (req: Request, res: Response, done: NextFunction) => {
  if (!req.user) return res.status(401).json({ msg: 'Unathorized' });

  done();
};

export const isAdmin = (req: Request, res: Response, done: NextFunction) => {
  if (!req.user) return res.status(401).json({ msg: 'Unathorized' });

  done();
};

export default passport;
