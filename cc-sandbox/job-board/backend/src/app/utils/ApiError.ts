/**
 * Structured operational error carrying an HTTP status code.
 * Thrown anywhere in the service/controller layer; the global error
 * handler reads `statusCode` to shape the response envelope.
 */
export class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'ApiError';
    Error.captureStackTrace(this, this.constructor);
  }
}
