import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { createContext, ReactNode, useContext } from 'react';
import { LoginPayload, RegisterPayload, User } from '../features/auth/auth.types';
import { ApiResponse } from '../lib/api';
import api from '../lib/axios';

const ME_KEY = ['auth', 'me'] as const;

interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  login: (payload: LoginPayload) => Promise<User>;
  register: (payload: RegisterPayload) => Promise<User>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

/**
 * Fetches the current user from `GET /auth/me`. A 401 (no/invalid cookie) is a
 * normal "logged out" state, so it resolves to `null` rather than throwing —
 * keeping the query out of an error state for anonymous visitors.
 */
const fetchMe = async (): Promise<User | null> => {
  try {
    const { data } = await api.get<ApiResponse<User>>('/auth/me');
    return data.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      return null;
    }
    throw error;
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ME_KEY,
    queryFn: fetchMe,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const loginMutation = useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const { data } = await api.post<ApiResponse<User>>('/auth/login', payload);
      return data.data;
    },
    onSuccess: (loggedInUser) => {
      queryClient.setQueryData(ME_KEY, loggedInUser);
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (payload: RegisterPayload) => {
      const { data } = await api.post<ApiResponse<User>>('/auth/register', payload);
      return data.data;
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await api.post('/auth/logout');
    },
    onSuccess: () => {
      queryClient.setQueryData(ME_KEY, null);
      queryClient.clear();
    },
  });

  const value: AuthContextValue = {
    user: user ?? null,
    isLoading,
    login: loginMutation.mutateAsync,
    register: registerMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/** Access auth state + actions. Role for all conditional UI comes from here. */
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
