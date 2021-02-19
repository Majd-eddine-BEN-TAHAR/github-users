import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url1, url2, url3) => {
  const [githubUser, setGithubUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios(url1);
        if (data) {
          Promise.allSettled([await axios(url2), await axios(url3)])
            .then((responses) => {
              setIsLoading(false);
              const checkResults = responses.every(
                ({ status }) => status === "fulfilled"
              );
              if (checkResults) {
                const result = responses.map(({ value: { data } }) => data);
                setGithubUser(data);
                setRepos(result[0]);
                setFollowers(result[1]);
              }
            })
            .catch((err) => {
              setIsLoading(false);
              setError(err.response.data.message);
            });
        }
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.response.data.message);
      }
    };

    fetchData();
  }, [url1, url2, url3]);

  return { githubUser, repos, followers, error, isLoading, setError };
};

export default useFetch;
