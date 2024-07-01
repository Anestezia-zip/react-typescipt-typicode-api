import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

interface FetchProps<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError<any> | null;
}

function useFetch <T>(endpoint: string): FetchProps<T> {
  const [data, setData] = useState<T | null>(null); 
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<AxiosError<any> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setData(null);
      setErr(null);

      try {
        const res = await axios.get<T>(`https://jsonplaceholder.typicode.com/${endpoint}`);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setErr(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error: err };
};

export default useFetch;
