import cors from 'cors'
import express, { Request, Response, Express } from 'express'
import session, { Store } from 'express-session'
import morgan from 'morgan'

import { SESSION_OPTIONS, CORS_OPTIONS } from './config'
import { authRoutes, messageRoutes, roomRoutes } from './api/routes'
import { handleError } from './middleware'

export const createApp = (store: Store): Express => {
  const app: Express = express()

  // middleware
  app.use(cors(CORS_OPTIONS))
  app.use(express.json())
  app.use(morgan('dev'))
  app.use(session({ ...SESSION_OPTIONS, store }))

  // ngix
  app.set('trust proxy', 1)

  // routes
  app.use('/api', authRoutes)
  app.use('/api', roomRoutes)
  app.use('/api', messageRoutes)

  // 404 - no route in use
  app.use((req: Request, res: Response) => {
    res.status(404).json({ error: 'page not found' })
  })

  app.use(handleError)

  return app
}
