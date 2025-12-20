import axios from 'axios';
import { env } from './env';

export const http = axios.create({
  baseURL: env.API_BASE_URL,
  withCredentials: true,
});

http.interceptors.response.use(
  (res) => res,
  (err) => {
    // Keep it simple; UI will show toast with message
    return Promise.reject(err);
  }
);
