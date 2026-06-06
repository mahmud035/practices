import { Response } from 'express';

interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export const sendResponse = <T>(
  res: Response,
  payload: ApiResponse<T>,
): void => {
  res.status(payload.statusCode).json(payload);
};
