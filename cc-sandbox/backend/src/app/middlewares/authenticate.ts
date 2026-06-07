import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface AuthRequest extends Request {
  user?: JwtPayload & { _id: string; email: string };
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.cookies?.token as string | undefined;

  if (!token) {
    res.status(401).json({ statusCode: 401, success: false, message: 'Unauthorized', data: null });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload & {
      _id: string;
      email: string;
    };
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ statusCode: 401, success: false, message: 'Invalid token', data: null });
  }
};
