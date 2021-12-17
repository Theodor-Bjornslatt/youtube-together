import { NextFunction, Request, RequestHandler, Response } from 'express'

export const catchAsync = (handler: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction): Promise<void> => {
    return Promise.resolve(handler(req, res, next)).catch(next)
  }
}
