import { Document, Types } from 'mongoose';

export type TUserRole = 'employer' | 'jobseeker';

export interface IUser extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: TUserRole;
  createdAt: Date;
  updatedAt: Date;
}

/** Decoded JWT payload carried in the auth cookie and attached to req.user. */
export interface IAuthPayload {
  _id: string;
  role: TUserRole;
}
