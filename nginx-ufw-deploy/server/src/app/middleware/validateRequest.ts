import { RequestHandler } from 'express';
import { AnyZodObject } from 'zod';

/**
 * Runs the given Zod schema against req.body, req.query, and req.params.
 * Throws ZodError on failure; the global error handler maps it to 400.
 *
 * Schemas are written as:
 *   z.object({ body: z.object({ ... }), query: z.object({...}), params: z.object({...}) })
 * where each of body/query/params is optional.
 */
export const validateRequest = (schema: AnyZodObject): RequestHandler => {
  return async (req, _res, next) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (err) {
      next(err);
    }
  };
};
