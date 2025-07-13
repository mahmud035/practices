import { useEffect, useState } from 'react';
import axiosInstance from '../config/axios.config';

/**
 * A custom hook for handling fetch requests
 *
 * @template T - The type of the API response
 * @param {string} url - The API URL to fetch data from
 * @returns {{
 *   data: T | null,
 *   loading: boolean,
 *   error: Error | null
 * }} An object containing the API response, loading state, and error
 *
 * @example
 * const { data, loading, error } = useFetch('https://api.example.com/data')
 */

export default function useFetch<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(url);
        setData(res.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
