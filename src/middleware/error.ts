import { ApiError } from './../helpers/api-errors';
import { Request, Response } from 'express'

export const errorMiddleware = (error: Error & Partial<ApiError>, req: Request, res: Response) => {
  const statusCode = error.statusCode ?? 500
  const message = error.statusCode ? error.message : 'Internal server Error'
  return res.status(statusCode).json({ message })
}