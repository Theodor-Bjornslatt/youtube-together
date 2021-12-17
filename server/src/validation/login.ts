import { Request } from 'express'

import { UserDocument } from '../api/models'

declare module 'express-session' {
  interface SessionData {
    admin: boolean
    userId: string
  }
}

export const logIn = (req: Request, { admin, _id }: UserDocument): void => {
  req.session.admin = admin
  req.session.userId = _id
}

export const isLoggedIn = (req: Request): boolean => {
  return !req.session.userId
}
