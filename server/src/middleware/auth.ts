import { NextFunction, Request, Response } from 'express'

import { isLoggedIn } from '../validation'

export const guest = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!isLoggedIn(req)) {
    next(new Error('You are already logged in'))
  }

  next()
}