import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

/**
 * Validation gate. Parses `{ body, query, params }` against the supplied Zod
 * schema and writes the coerced values back onto the request. A failed parse
 * rejects (forwarded to the global error handler, which renders 400). First
 * line of defence-in-depth — the service layer revalidates ownership/business
 * rules independently.
 */
const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      const parsed = await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      // Express 4 allows reassigning these; we write coerced values back so
      // controllers receive typed query/params (e.g. numeric pagination).
      if (parsed.body !== undefined) req.body = parsed.body;
      if (parsed.query !== undefined) req.query = parsed.query;
      if (parsed.params !== undefined) req.params = parsed.params;
      next();
    } catch (error) {
      next(error);
    }
  };

export default validateRequest;
