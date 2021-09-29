/* ----------------------------------------------------- */
/*           Persistencia por redis database             */
/* https://github.com/microsoftarchive/redis/releases */
/* ----------------------------------------------------- */
import config from '../config';
import redis from 'redis';
import connectRedis from 'connect-redis';
import session from 'express-session';
const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
  host: config.REDIS_URL,
  port: config.REDIS_PORT,
  password: config.REDIS_PSW,
});

export default new RedisStore({ client: redisClient });
/* ----------------------------------------------------- */

redisClient.on('error', function (err) {
  console.log('Error with Redis!. ' + err);
});

redisClient.on('connect', function (err) {
  console.log('Connected to redis successfully');
});
