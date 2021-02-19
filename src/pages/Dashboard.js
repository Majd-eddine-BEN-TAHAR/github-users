import React, { useContext, useEffect } from "react";
import {
  UserInfo,
  Search,
  User,
  Followers,
  Languages,
  PopularRepos,
  Spinner,
  Error,
} from "./../components";
import GithubContext from "../context/GithubContext";
import "./../index.css";

const Dashboard = () => {
  const { isLoading, error, setError, rateLimit } = useContext(GithubContext);

  let container = (
    <>
      <User />
      <Followers />
      <Languages />
      <PopularRepos />
    </>
  );
  if (isLoading) container = <Spinner />;

  useEffect(() => {
    if (rateLimit === 0) setError("You cannot make more requests 0/60");
  });

  return (
    <div className="dashboard">
      <Search />
      <UserInfo />
      <div className="grid-layout">{container}</div>
      {error && <Error error={error} setError={setError} />}
    </div>
  );
};

export default Dashboard;
