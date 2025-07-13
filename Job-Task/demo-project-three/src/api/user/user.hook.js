import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getUser, getUsers } from './user.api';

export const useGetUsersQuery = (page, limit) => {
  return useQuery({
    queryKey: ['users', { page, limit }],
    queryFn: () => getUsers(page, limit),
    placeholderData: keepPreviousData,
  });
};

export const useGetUserQuery = (id) => {
  return useQuery({
    queryKey: ['users', { id }],
    queryFn: () => getUser(id),
  });
};
