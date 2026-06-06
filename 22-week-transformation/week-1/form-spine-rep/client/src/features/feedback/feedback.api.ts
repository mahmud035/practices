import { CreateFeedbackInput } from '../../../../shared/feedback.schema';
import { api } from '../../api/axios';
import { ApiResponse } from '../../api/response';

export interface Feedback extends CreateFeedbackInput {
  id: string;
  createdAt: string;
}

export const createFeedback = async (
  payload: CreateFeedbackInput,
): Promise<Feedback> => {
  const res = await api.post<ApiResponse<Feedback>>('/feedback', payload);
  return res.data.data; // axios `.data` = envelope; `.data.data` = our payload
};

export const getFeedback = async (): Promise<Feedback[]> => {
  const res = await api.get<ApiResponse<Feedback[]>>('/feedback');
  return res.data.data;
};

// Teaches: the res.data.data double-hop trips everyone once — axios wraps the body in .data, and your envelope wraps the payload in .data again. Typing it `ApiResponse<Feedback>` makes the shape explicit.
