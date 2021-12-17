import { Request } from 'express'

declare module 'express-session' {
  interface SessionData {
    admin: boolean
    userId: string
  }
}

interface User {
  _id: string
  admin: boolean
}

export const logIn = (req: Request, { admin, _id }: User): void => {
  req.session.admin = admin
  req.session.userId = _id
}
