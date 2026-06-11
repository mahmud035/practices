import { AxiosError } from 'axios';

/** Mirrors the backend success envelope `{ statusCode, success, message, data }`. */
export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

/** Shape of the backend error envelope (data is always null on error). */
interface ApiErrorBody {
  message: string;
}

/**
 * Pulls a human-readable message out of an axios error, preferring the
 * backend envelope's `message`. Used to render error states/toasts.
 */
export const getApiErrorMessage = (error: unknown, fallback = 'Something went wrong'): string => {
  if (error instanceof AxiosError) {
    return (error.response?.data as ApiErrorBody | undefined)?.message ?? error.message ?? fallback;
  }
  if (error instanceof Error) return error.message;
  return fallback;
};
