import { Document, Types } from 'mongoose';

export type TApplicationStatus = 'pending' | 'reviewed' | 'rejected';

export interface IApplication extends Document {
  _id: Types.ObjectId;
  job: Types.ObjectId;
  jobseeker: Types.ObjectId;
  coverLetter: string;
  cvUrl?: string;
  cvPublicId?: string;
  status: TApplicationStatus;
  createdAt: Date;
  updatedAt: Date;
}
