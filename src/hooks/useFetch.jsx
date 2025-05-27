import { useState, useEffect } from "react";
import { api } from "../api";

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(endpoint).then((res) => {
      setData(res.data);
      console
        .log(res)
        .catch((err) => {
          setError(err);
          console.log(err);
        })
        .finally(() => setLoading(false));
    });
  }, []);
  if (error) {
    return (
      <div className="text-center my-4 text-red-600 text-[18px]">
        <p>Something is wrong:)</p>
      </div>
    );
  }
  return { data, error, loading };
};
