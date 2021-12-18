import { Request, Response, NextFunction, RequestHandler } from 'express'

import { BadRequest, CustomError } from '../errors'
import { IError } from '../interfaces'
import log from '../logger'

const handleError = (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // log.error(err)
  res.status(err.status).json({ error: err.message })
}

const catchAsync = (handler: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction): Promise<void> => {
    return Promise.resolve(handler(req, res, next)).catch(next)
  }
}

export { handleError, catchAsync }
