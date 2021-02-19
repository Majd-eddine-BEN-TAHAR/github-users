import React, { useContext } from "react";
import Location from "./../../images/location.svg";
import Link from "./../../images/link.svg";
import GithubContext from "../../context/GithubContext";
import "./index.css";

const UserInfo = () => {
  const { githubUser } = useContext(GithubContext);

  if (!githubUser)
    return (
      <section className="user-section">
        <header className="user-header">
          <h2 className="section-title">user</h2>
        </header>
      </section>
    );

  const {
    name,
    twitter_username,
    html_url,
    avatar_url: photo,
    bio: description,
    location,
    blog: website,
  } = githubUser;

  return (
    <section className="user-section">
      <header className="user-header">
        <h2 className="section-title">user</h2>
        <div className="header-left">
          <img src={photo} alt="" />
          <div>
            <h4>{name}</h4>
            <p>@{twitter_username || "John_doe"}</p>
          </div>
        </div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={html_url}
          className="header-right"
        >
          follow
        </a>
      </header>
      <div className="user-data">
        <div className="description">{description}</div>
        <div className="links">
          <p>
            <img src={Location} alt="" />
            {location}
          </p>
          <p>
            <img src={Link} alt="" />
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="li"
            >
              {website}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
