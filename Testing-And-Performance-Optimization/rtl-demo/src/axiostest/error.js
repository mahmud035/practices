import axios from 'axios';

export const myFunction = async () => {
  try {
    const response = await axios.get(`https://myapi.com`);
    return response.data;
  } catch (error) {
    if (error.status >= 400) {
      return 'Error'; // For Jest Error
    }
    throw error;
  }
};
