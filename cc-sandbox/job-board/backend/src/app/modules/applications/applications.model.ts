import { model, Schema } from 'mongoose';
import { IApplication } from './applications.interface';

const applicationSchema = new Schema<IApplication>(
  {
    job: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
    jobseeker: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    coverLetter: { type: String, required: true },
    cvUrl: { type: String },
    cvPublicId: { type: String },
    status: {
      type: String,
      enum: ['pending', 'reviewed', 'rejected'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

// DB-level guard against applying to the same job twice.
applicationSchema.index({ job: 1, jobseeker: 1 }, { unique: true });

export const Application = model<IApplication>('Application', applicationSchema);
