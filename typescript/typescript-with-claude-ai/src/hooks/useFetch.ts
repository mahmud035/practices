import axios from 'axios';
import { useEffect, useState } from 'react';
import type { ApiResponse } from '../docs/handbook--more-on-functions';

// Reusable fetch hook
export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<ApiResponse<T>>(url);
        setData(res.data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
