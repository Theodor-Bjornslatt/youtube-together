import { Request } from 'express'

import { IUser } from '../interfaces'

declare module 'express-session' {
  interface SessionData {
    admin: boolean
    userId: string
  }
}

export const logIn = (req: Request, { _id }: IUser): void => {
  req.session.userId = _id
}

export const isLoggedIn = (req: Request): boolean => {
  return !req.session.userId
}
