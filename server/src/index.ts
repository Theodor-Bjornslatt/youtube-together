import connectRedis from 'connect-redis'
import dotenv from 'dotenv'
import session from 'express-session'
import Redis from 'ioredis'

import { createApp } from './app'
import { APP_PORT, REDIS_OPTIONS, MONGO_URI } from './config'
import log from './logger'
import connectMongoDB from './db/mongodb'
import { createServer } from './server'
import { initSocket } from './socket'

dotenv.config({
  path: '.env'
})

try {
  const RedisStore = connectRedis(session)
  const client = new Redis(REDIS_OPTIONS)
  const store = new RedisStore({ client })
  const app = createApp(store)
  const server = createServer(app)

  initSocket(server)
  connectMongoDB(MONGO_URI)

  server.listen(APP_PORT, () => {
    log.info(`SERVER RUNNING ON PORT: ${APP_PORT}`)
  })
} catch (error) {
  // log.error(error)
  process.exit(1)
}
