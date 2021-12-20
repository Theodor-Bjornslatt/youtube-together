import { Request } from 'express'

import { IUser } from '../interfaces'

declare module 'express-session' {
  interface SessionData {
    admin: boolean
    userId: string
  }
}

export const logIn = (req: Request, { admin, _id }: IUser): void => {
  req.session.admin = admin
  req.session.userId = _id
}

export const isLoggedIn = (req: Request): boolean => {
  return !req.session.userId
}
