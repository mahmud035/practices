import axiosInstance from '../index';

export const getUsers = async (page = 1, limit = 3) => {
  const res = await axiosInstance.get(`/users?_limit=${limit}&_page=${page}`);
  const totalCount = parseInt(res.headers['x-total-count'], 10); // Extract x-total-count
  return {
    users: res.data, // Actual user data
    totalCount, // Total count of all users
  };
};

export const getUser = async (id) => {
  return (await axiosInstance.get(`/users/${id}`)).data;
};
