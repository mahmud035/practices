import { IProject } from '../../types/project';
import axios from '../index';

export const getProjects = async (page = 1): Promise<IProject[]> => {
  return (await axios.get(`projects?_page=${page}&_limit=3`)).data;
};
