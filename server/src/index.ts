import connectRedis from 'connect-redis'
import session from 'express-session'
import Redis from 'ioredis'

import { createApp } from './app'
import { APP_PORT, REDIS_OPTIONS, MONGO_URI } from './config'
import log from './logger/index'
import connectMongoDB from './db/mongodb'

try {
  const RedisStore = connectRedis(session)
  const client = new Redis(REDIS_OPTIONS)
  const store = new RedisStore({ client })
  const app = createApp(store)
  connectMongoDB(MONGO_URI)

  app.listen(APP_PORT, (): void => {
    log.info(`SERVER RUNNING ON PORT: ${APP_PORT}`)
  })
} catch (error) {
  log.error(error)
  process.exit(1)
}
