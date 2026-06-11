import { NextFunction, Request, Response } from 'express';
import { TUserRole } from '../modules/auth/auth.interface';
import { ApiError } from '../utils/ApiError';

/**
 * Role gate. Returns a middleware that allows the request through only when
 * `req.user.role` is one of the permitted roles. Runs AFTER `authenticate`
 * (which populates req.user). Responds 401 if unauthenticated, 403 on a role
 * mismatch. This is the RBAC enforcement seam — kept explicit at the route edge,
 * with deeper ownership checks living in the service layer.
 */
const authorizeRole =
  (...roles: TUserRole[]) =>
  (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      throw new ApiError(401, 'Authentication required');
    }

    if (!roles.includes(req.user.role)) {
      throw new ApiError(403, 'You do not have permission to perform this action');
    }

    next();
  };

export default authorizeRole;
