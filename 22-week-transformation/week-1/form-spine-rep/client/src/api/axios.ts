import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, // sends/receives cookies - warm project-1 auth
});
