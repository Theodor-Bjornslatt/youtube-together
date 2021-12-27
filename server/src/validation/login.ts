import { Request, Response } from 'express'

import { SESSION_NAME } from '../config'
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

export const logOut = (req: Request, res: Response): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    req.session.destroy((err) => {
      if (err) reject(err)
      res.clearCookie(SESSION_NAME)
      resolve()
    })
  })
}

export const isLoggedIn = (req: Request): boolean => {
  return !req.session.userId
}
