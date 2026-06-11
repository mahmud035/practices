import { Response } from 'express';

interface ResponsePayload<T> {
  statusCode: number;
  message: string;
  data: T;
}

/**
 * Writes the project-wide success envelope:
 * `{ statusCode, success, message, data }`. Every successful endpoint
 * funnels through here so the contract is identical across modules.
 */
const sendResponse = <T>(res: Response, payload: ResponsePayload<T>): void => {
  res.status(payload.statusCode).json({
    statusCode: payload.statusCode,
    success: true,
    message: payload.message,
    data: payload.data,
  });
};

export default sendResponse;
