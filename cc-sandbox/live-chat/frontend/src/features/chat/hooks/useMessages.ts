import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../../lib/axios';
import type { IMessage, TRoom } from '../types/chat.types';

interface ApiResponse<T> {
  data: T;
}

const useMessages = (room: TRoom | undefined) => {
  return useQuery<IMessage[]>({
    queryKey: ['messages', room],
    queryFn: async () => {
      const { data } = await axiosInstance.get<ApiResponse<IMessage[]>>(
        `/api/messages/${room}?limit=50`
      );
      return data.data;
    },
    enabled: !!room,
    // Socket owns freshness after initial load — never auto-refetch
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};

export default useMessages;
