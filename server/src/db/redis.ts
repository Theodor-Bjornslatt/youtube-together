import Redis from 'ioredis'

import { REDIS_OPTIONS } from '../config'

let redisClient: Redis.Redis | undefined

export const getRedis = (): Redis.Redis => {
  if (!redisClient) {
    redisClient = new Redis(REDIS_OPTIONS)
  }
  return redisClient
}
