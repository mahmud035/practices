import { IProject } from '../../types/project';
import axios from '../index';

export const getProjects = async (page = 1): Promise<IProject[]> => {
  return (await axios.get(`projects?_page=${page}&_limit=3`)).data;
};

// For pagination with page numbers
export const getProjectsTwo = async (
  page = 1
): Promise<{ projects: IProject[]; totalCount: number }> => {
  const res = await axios.get(`projects?_page=${page}&_limit=3`);
  const totalCount = parseInt(res.headers['x-total-count'], 10); // Extract x-total-count
  return {
    projects: res.data, // Actual project data
    totalCount, // Total count of all projects
  };
};
