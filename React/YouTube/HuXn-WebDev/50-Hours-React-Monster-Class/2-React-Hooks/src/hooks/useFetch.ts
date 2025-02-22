import { useEffect, useState } from 'react';
import axiosInstance from '../config/axios.config';

export default function useFetch<T>(url: string): T[] {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(url);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  return data;
}
