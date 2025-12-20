import crypto from 'crypto';
import { NextFunction, Request, Response } from 'express';

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const requestId = crypto.randomUUID();
  (req as any).requestId = requestId;

  const start = process.hrtime.bigint();

  res.on('finish', () => {
    const end = process.hrtime.bigint();
    const ms = Number(end - start) / 1_000_000;

    const slow = ms > 1500 ? '🐢 SLOW' : '';
    // practical logs (keep it)
    console.log(
      `[${requestId}] ${req.method} ${req.originalUrl} ${
        res.statusCode
      } ${ms.toFixed(1)}ms ${slow}`.trim()
    );
  });

  next();
};
