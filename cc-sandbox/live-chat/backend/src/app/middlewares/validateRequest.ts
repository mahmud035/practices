import { NextFunction, Request, Response } from 'express';
import { ZodTypeAny } from 'zod';

const validateRequest = (schema: ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        statusCode: 400,
        success: false,
        message: 'Validation error',
        data: result.error.issues,
      });
      return;
    }
    req.body = result.data;
    next();
  };
};

export default validateRequest;
