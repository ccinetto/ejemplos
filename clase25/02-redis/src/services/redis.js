/* ----------------------------------------------------- */
/*           Persistencia por redis database             */
/* https://github.com/microsoftarchive/redis/releases */
/* ----------------------------------------------------- */
import redis from 'redis';
import connectRedis from 'connect-redis';
import session from 'express-session';

const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
});
/* ----------------------------------------------------- */

export default new RedisStore({ client: redisClient });

redisClient.on('error', function (err) {
  console.log('Error with Redis!. ' + err);
});

redisClient.on('connect', function (err) {
  console.log('Connected to redis successfully');
});
