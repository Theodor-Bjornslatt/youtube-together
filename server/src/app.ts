import cors from 'cors'
import dotenv from 'dotenv'
import express, { Request, Response, Express } from 'express'
import session, { Store } from 'express-session'
import morgan from 'morgan'

import { SESSION_OPTIONS } from './config'
import { authRoutes } from './api/routes'

dotenv.config({
  path: '.env'
})

export const createApp = (store: Store): Express => {
  const app: Express = express()

  // middleware
  app.use(cors())
  app.use(express.json())
  app.use(morgan('dev'))
  app.use(session({ ...SESSION_OPTIONS, store }))

  // ngix
  app.set('trust proxy', 1)

  // routes
  app.use('/api', authRoutes)

  // 404 - no route in use
  app.use('*', (req: Request, res: Response) => {
    res.status(404).json({ error: 'page not found' })
  })

  return app
}
