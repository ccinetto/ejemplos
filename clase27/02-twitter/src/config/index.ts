import dotenv from 'dotenv';

dotenv.config();

export default {
  MONGO_ATLAS_URL: process.env.MONGO_ATLAS_SRV || 'mongoSRV',
  PORT: process.env.PORT || 8080,
  TWITTER_APP_ID: process.env.TWITTER_APP_ID || 'faceId',
  TWITTER_APP_SECRET: process.env.TWITTER_APP_SECRET || 'faceSecret',
};
