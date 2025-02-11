
import { createClient } from 'redis';

type RedisClient = ReturnType<typeof createClient>;

let redisClient = await createClient()
  .on('error', err => console.log('Redis Client Error', err))
  .connect();

export default redisClient;
