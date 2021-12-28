import { NextFunction, Request, Response } from 'express'

import { AllReadyLogedIn, BadRequest } from '../errors'
import { isLoggedIn } from '../validation'

export const guest = (req: Request, _: Response, next: NextFunction): void => {
  if (!isLoggedIn(req)) {
    next(new AllReadyLogedIn('You are already logged in'))
  }

  next()
}

export const member = (req: Request, _: Response, next: NextFunction): void => {
  if (isLoggedIn(req)) {
    next(new BadRequest('You must be logged in to log out'))
  }

  next()
}
