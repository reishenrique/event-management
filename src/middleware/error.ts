import { ApiError } from './../helpers/api-errors';
import { Request, Response, NextFunction} from 'express'


export const errorMiddleware = (error: Error & Partial<ApiError>, _req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(error)
  }
  
  const statusCode = error.statusCode ?? 500
  const message = error.statusCode ? error.message : 'Internal server Error'
  return res.status(statusCode).json({ message })
}