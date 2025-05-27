// src/hooks/useFetch.js
import { useState, useEffect } from "react";
import { api } from "../api";

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get(endpoint.startsWith("/") ? endpoint : `/${endpoint}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [endpoint]);

  return { data, error, loading };
};
