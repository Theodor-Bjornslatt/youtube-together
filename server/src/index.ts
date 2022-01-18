import connectRedis from 'connect-redis'
import dotenv from 'dotenv'
import session from 'express-session'

import { createApp } from './app'
import { APP_PORT, MONGO_URI } from './config'
import log from './logger'
import connectMongoDB from './db/mongodb'
import { createServer } from './server'
import { initSocket } from './socket'
import { getRedis } from './db/redis'

dotenv.config({
  path: '.env'
})

try {
  const RedisStore = connectRedis(session)
  const client = getRedis()
  const store = new RedisStore({ client })
  const app = createApp(store)
  const server = createServer(app)

  initSocket(server)
  connectMongoDB(MONGO_URI)

  server.listen(APP_PORT, () => {
    log.info(`SERVER RUNNING ON PORT: ${APP_PORT}`)
  })
} catch (error) {
  log.error(error)
  process.exit(1)
}
