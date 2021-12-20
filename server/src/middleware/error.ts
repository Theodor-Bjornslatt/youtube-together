import { Request, Response, NextFunction, RequestHandler } from 'express'

import { IError } from '../interfaces'

const handleError = (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // log.error(err)
  res.status(err.status || 500).json({ error: err.message || 'Server bad' })
}

const catchAsync = (handler: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction): Promise<void> => {
    return Promise.resolve(handler(req, res, next)).catch(next)
  }
}

export { handleError, catchAsync }
