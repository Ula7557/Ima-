import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageProvider";
import { request } from "../services/api";

export const useFetch = (uri) => {
  const [lang] = useLang();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    request(uri)
      .then((res) => setData(res.data))
      .then(() => setLoading(false))
      .catch((err) => setError(err));
  }, [uri, lang]);
  return [loading, data, error];
};
