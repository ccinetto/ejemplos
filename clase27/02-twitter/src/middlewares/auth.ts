import passport from 'passport';
import { UserModel } from '../models/user';
import Config from '../config';
import {
  IStrategyOptionBase,
  Profile,
  Strategy as TwitterStrategy,
} from 'passport-twitter';
import { Request, Response, NextFunction } from 'express';

const strategyOptions: IStrategyOptionBase = {
  consumerKey: Config.TWITTER_APP_ID,
  consumerSecret: Config.TWITTER_APP_SECRET,
  callbackURL: 'http://localhost:8080/api/auth/twitter/callback',
};

const loginFunc = async (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: (error: any, user?: any) => void
) => {
  console.log('SALIO TODO BIEN');
  console.log(accessToken);
  console.log(refreshToken);
  console.log(profile);
  return done(null, profile);
};

passport.use(new TwitterStrategy(strategyOptions, loginFunc));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj: string, cb) {
  cb(null, obj);
});

export const isLoggedIn = (req: Request, res: Response, done: NextFunction) => {
  // if (!req.isAuthenticated())
  if (!req.isAuthenticated()) {
    console.log('no autorizado!');
    return res.redirect('/api/login');
  }

  done();
};

export default passport;
