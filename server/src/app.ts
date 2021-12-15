import express, { Request, Response, Express } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config({
  path: '.env'
})

export const createApp = (): Express => {
  const app: Express = express()
  app.use(morgan('dev'))
  app.use(cors())
  app.set('trust proxy', 1)

  app.use('/', (req: Request, res: Response): void => {
    res.json({ message: 'Hello' })
  })

  app.use('*', (req: Request, res: Response) =>
    res.status(404).json({ error: 'page not found' })
  )

  return app
}
