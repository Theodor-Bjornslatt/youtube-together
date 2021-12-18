import { Express } from 'express'
import http, { Server } from 'http'

export const createServer = (app: Express): Server => {
  const server = http.createServer(app)

  return server
}
