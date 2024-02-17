import axios from 'axios';

//* create axios instance
const api = axios.create({
  baseURL: 'http://localhost:8000',
});

const token = 'secretToken';

// NOTE: interceptors এর ভিতরের ২ টা callback function থেকেই অবশ্যই return করতে হবে।

//* request interceptors
api.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//* response interceptors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // error came from server
      error.message = `Error from server: status: ${error.response.status} - message: ${error.response.statusText}`;
    }
    return Promise.reject(error);
  }
);

export default api;
