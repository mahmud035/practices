import { ErrorRequestHandler } from 'express';
import { MongoServerError } from 'mongodb';
import mongoose from 'mongoose';
import { ZodError } from 'zod';
import { ApiError } from '../utils/ApiError';

/**
 * Terminal error middleware. Normalises every thrown error into the project
 * envelope `{ statusCode, success: false, message, data: null }`. Known shapes
 * (ApiError, Zod, Mongoose validation/cast, Mongo duplicate-key) get tailored
 * status codes; anything else falls back to 500.
 */
const globalErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  let statusCode = 500;
  let message = 'Internal server error';

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof ZodError) {
    statusCode = 400;
    message = err.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ');
  } else if (err instanceof mongoose.Error.ValidationError) {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((e) => e.message)
      .join('; ');
  } else if (err instanceof mongoose.Error.CastError) {
    statusCode = 400;
    message = `Invalid ${err.path}: ${err.value}`;
  } else if ((err as MongoServerError)?.code === 11000) {
    statusCode = 409;
    message = 'Duplicate value violates a unique constraint';
  } else if (err instanceof Error) {
    message = err.message;
  }

  res.status(statusCode).json({
    statusCode,
    success: false,
    message,
    data: null,
  });
};

export default globalErrorHandler;
