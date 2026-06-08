import { Request, Response, NextFunction } from 'express'
import { ZodSchema } from 'zod'

const validateRequest = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse(req.body)
  if (!result.success) {
    res.status(400).json({
      statusCode: 400,
      success: false,
      message: 'Validation error',
      data: result.error.flatten().fieldErrors,
    })
    return
  }
  req.body = result.data
  next()
}

export default validateRequest
