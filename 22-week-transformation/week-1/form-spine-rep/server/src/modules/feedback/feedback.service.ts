import { CreateFeedbackInput } from '../../../../shared/feedback.schema';
import { IFeedback } from './feedback.interface';

const db: IFeedback[] = []; // in-memory store - disposable rep, no Mongo

export const feedbackService = {
  // Persist a new feedback record and return it
  create: async (payload: CreateFeedbackInput): Promise<IFeedback> => {
    const record: IFeedback = {
      id: crypto.randomUUID(),
      createdAt: new Date().toDateString(),
      ...payload,
    };
    db.push(record);
    return record;
  },

  // Return all feedback, newest first
  list: async (): Promise<IFeedback[]> => {
    return [...db].reverse();
  },
};
