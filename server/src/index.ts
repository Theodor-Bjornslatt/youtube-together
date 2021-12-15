import { createApp } from './app'
import { APP_PORT } from './config'
import log from './logger'

const app = createApp()

app.listen(APP_PORT, (): void => {
  log.info(`SERVER RUNNING ON PORT: ${APP_PORT}`)
})
