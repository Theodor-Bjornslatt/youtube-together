import cors from 'cors'
import express, { Request, Response, Express } from 'express'
import session, { Store } from 'express-session'
import morgan from 'morgan'

import { SESSION_OPTIONS } from './config'
import { authRoutes } from './api/routes'
import { IError } from './interfaces'

export const createApp = (store: Store): Express => {
  const app: Express = express()

  // middleware
  app.use(cors({ credentials: false }))
  app.use(express.json())
  app.use(morgan('dev'))
  app.use(session({ ...SESSION_OPTIONS, store }))

  // ngix
  app.set('trust proxy', 1)

  // routes
  app.use('/api', authRoutes)

  // 404 - no route in use
  app.use((req: Request, res: Response) => {
    res.status(404).json({ error: 'page not found' })
  })
  app.use((err: any, req: Request, res: Response) => {
    console.log('Error Handling Middleware called')
    console.log(`err`, err.message)
    res
      .status(err.status || 500)
      .json({ message: err.message || 'Something went wrong on server' })
  })

  return app
}
