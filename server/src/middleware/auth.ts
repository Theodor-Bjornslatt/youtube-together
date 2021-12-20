import { NextFunction, Request, Response } from 'express'

import { AllReadyLogedIn } from '../errors'
import { isLoggedIn } from '../validation'

export const guest = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!isLoggedIn(req)) {
    next(new AllReadyLogedIn('You are already logged in'))
  }

  next()
}
