import React, { useContext } from "react";
import UserInfoItem from "./UserInfoItem";
import Notebook from "./../../images/notebook.svg";
import Followers from "./../../images/followers.svg";
import Follower from "./../../images/follower.svg";
import GithubContext from "../../context/GithubContext";
import "./index.css";

const UserInfo = () => {
  const { githubUser } = useContext(GithubContext);
  if (!githubUser) return null;

  const { public_repos, followers, following } = githubUser;
  const items = [
    {
      id: 1,
      icon: Notebook,
      label: "repos",
      value: public_repos,
    },
    {
      id: 2,
      icon: Followers,
      label: "followers",
      value: followers,
    },
    {
      id: 3,
      icon: Follower,
      label: "following",
      value: following,
    },
  ];

  return (
    <div className="user-info">
      {items.map(({ id, label, value, icon }) => {
        return (
          <UserInfoItem
            key={id} //
            label={label}
            value={value}
            icon={icon}
          />
        );
      })}
    </div>
  );
};

export default UserInfo;
