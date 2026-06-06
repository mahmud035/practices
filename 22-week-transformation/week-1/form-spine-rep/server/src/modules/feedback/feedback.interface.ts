import { CreateFeedbackInput } from '../../../../shared/feedback.schema';

export interface IFeedback extends CreateFeedbackInput {
  id: string;
  createdAt: string;
}
