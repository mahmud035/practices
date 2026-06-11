import axios from 'axios';

/** Single API client. `withCredentials` ships the HTTP-only auth cookie. */
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

export default api;
