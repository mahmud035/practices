import { IAuthPayload } from '../../app/modules/auth/auth.interface';

declare global {
  namespace Express {
    interface Request {
      /** Set by the `authenticate` middleware after verifying the JWT cookie. */
      user?: IAuthPayload;
    }
  }
}

export {};
