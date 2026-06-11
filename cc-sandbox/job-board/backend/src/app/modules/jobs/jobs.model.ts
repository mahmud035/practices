import { model, Schema } from 'mongoose';
import { IJob } from './jobs.interface';

const jobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    type: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Remote'],
      required: true,
    },
    description: { type: String, required: true },
    salaryMin: { type: Number, required: true, min: 0 },
    salaryMax: { type: Number, required: true, min: 0 },
    deadline: { type: Date, required: true },
    status: {
      type: String,
      enum: ['open', 'closed'],
      default: 'open',
    },
    employer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

// Supports the public browse query (status + deadline) and employer scoping.
jobSchema.index({ status: 1, deadline: 1 });
jobSchema.index({ employer: 1 });

export const Job = model<IJob>('Job', jobSchema);
