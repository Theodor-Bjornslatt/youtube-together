import { Request } from 'express'

declare module 'express-session' {
  interface SessionData {
    admin: boolean
    userId: string
  }
}

export const isAdmin = (req: Request): boolean => {
  return !req.session.admin
}
