import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IAuthPayload } from '../modules/auth/auth.interface';
import { ApiError } from '../utils/ApiError';

/**
 * Verifies the JWT carried in the HTTP-only `token` cookie and attaches the
 * decoded `{ _id, role }` payload to `req.user`. Rejects with 401 when the
 * cookie is missing or the token is invalid/expired. Must run before any
 * `authorizeRole` guard.
 */
const authenticate = (req: Request, _res: Response, next: NextFunction): void => {
  const token = req.cookies?.token as string | undefined;

  if (!token) {
    throw new ApiError(401, 'Authentication required');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as IAuthPayload;
    req.user = { _id: decoded._id, role: decoded.role };
    next();
  } catch {
    throw new ApiError(401, 'Invalid or expired token');
  }
};

export default authenticate;
