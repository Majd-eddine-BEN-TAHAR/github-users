import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const GithubContext = createContext();
const ROOT_URL = "https://api.github.com";

const GithubProvider = ({ children }) => {
  const [user, setUser] = useState("majd-eddine-ben-tahar");
  const [rateLimit, setRateLimit] = useState(null);

  useEffect(() => {
    axios("https://api.github.com/rate_limit").then((res) => {
      setRateLimit(res.data.rate.remaining);
    });
  }, [user]);

  const { githubUser, repos, followers, error, isLoading, setError } = useFetch(
    `${ROOT_URL}/users/${user}`,
    `${ROOT_URL}/users/${user}/repos?per_page=100`,
    `${ROOT_URL}/users/${user}/followers`
  );

  return (
    <GithubContext.Provider
      value={{
        githubUser, //
        repos,
        followers,
        error,
        isLoading,
        user,
        rateLimit,
        setUser,
        setError,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export { GithubProvider };
export default GithubContext;
