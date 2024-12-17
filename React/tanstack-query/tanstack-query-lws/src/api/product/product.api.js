import axios from '../index';

export const getProducts = async (page = 1) => {
  const { data } = await axios.get(`/products?_page=${page}&_per_page=6`);
  return data;
};

export const addProduct = async (newProduct) => {
  return await axios.post(`/products`, newProduct);
};

export const updateProduct = async (data) => {
  return await axios.put(`/products/${data.id}`, data);
};

export const deleteProduct = async (id) => {
  return await axios.delete(`/products/${id}`);
};
