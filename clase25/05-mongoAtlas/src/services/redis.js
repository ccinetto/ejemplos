/* ----------------------------------------------------- */
/*           Persistencia por redis database             */
/* https://github.com/microsoftarchive/redis/releases */
/* ----------------------------------------------------- */
import redis from 'redis';
import connectRedis from 'connect-redis';
import session from 'express-session';
export const RedisStore = connectRedis(session);

export const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
});
/* ----------------------------------------------------- */

redisClient.on('error', function (err) {
  console.log('Error with Redis!. ' + err);
});

redisClient.on('connect', function (err) {
  console.log('Connected to redis successfully');
});
