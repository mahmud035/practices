import { NextFunction, Request, Response } from 'express';
import { ZodType } from 'zod';

export const validateRequest =
  (schema: ZodType) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        statusCode: 400,
        success: false,
        message: 'Validation failed',
        data: result.error.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: issue.message,
        })),
      });
      return;
    }

    req.body = result.data; // replace raw body with PARSED + COERCED data
    next();
  };
