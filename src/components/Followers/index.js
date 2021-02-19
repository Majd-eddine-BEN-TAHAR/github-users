import React, { useContext } from "react";
import Follower from "./Follower";
import "./index.css";
import GithubContext from "../../context/GithubContext";

const Followers = () => {
  const { followers, isLoading } = useContext(GithubContext);
  if (isLoading) return null;

  return (
    <section className="followers-section">
      <h2 className="section-title">followers</h2>
      <div className="followers-container">
        {followers.map(({ login, avatar_url, html_url }) => (
          <Follower //
            key={login}
            avatar={avatar_url}
            username={login}
            link={html_url}
          />
        ))}
      </div>
    </section>
  );
};

export default Followers;
