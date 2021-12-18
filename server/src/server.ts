import { Express } from 'express'
import { createServer as makeServer, Server } from 'http'

export const createServer = (app: Express): Server => {
  return makeServer(app)
}
