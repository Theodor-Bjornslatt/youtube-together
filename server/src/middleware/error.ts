import { Request, Response, NextFunction, RequestHandler } from 'express'

import { BadRequest, CustomError } from '../errors'

const handleError = (
  err: CustomError | BadRequest,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(err.status).json({ error: err.message })
}

const catchAsync = (handler: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction): Promise<void> => {
    return Promise.resolve(handler(req, res, next)).catch(next)
  }
}

export { handleError, catchAsync }
