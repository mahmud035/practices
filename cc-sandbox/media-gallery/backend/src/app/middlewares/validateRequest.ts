import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError } from 'zod';

const validateRequest = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse({ body: req.body, query: req.query, params: req.params });
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({
          statusCode: 400,
          success: false,
          message: err.errors[0].message,
          data: null,
        });
        return;
      }
      next(err);
    }
  };
};

export default validateRequest;
