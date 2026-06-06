import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createFeedback, getFeedback } from './feedback.api';

export const useFeedbackList = () => {
  return useQuery({ queryKey: ['feedback'], queryFn: getFeedback });
};

export const useCreateFeedback = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feedback'] });
    },
  });
};
