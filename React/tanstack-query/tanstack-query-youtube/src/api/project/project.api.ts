import axios from '../index';

export const getProjects = async (page = 1) => {
  return await axios.get(`projects?_page=${page}&_limit=3`);
};
