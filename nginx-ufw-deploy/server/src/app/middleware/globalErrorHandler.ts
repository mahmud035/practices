import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

/**
 * Catches all errors thrown in routes/services and returns the
 * standard response envelope: { statusCode, success, message, data }.
 */
export const globalErrorHandler: ErrorRequestHandler = (
  err,
  _req,
  res,
  _next,
) => {
  let statusCode = 500;
  let message = 'Internal server error';
  let details: unknown = null;

  if (err instanceof ZodError) {
    statusCode = 400;
    message = 'Validation failed';
    details = err.issues;
  } else if (err instanceof Error) {
    message = err.message || message;
  }

  res.status(statusCode).json({
    statusCode,
    success: false,
    message,
    data: details,
  });
};
