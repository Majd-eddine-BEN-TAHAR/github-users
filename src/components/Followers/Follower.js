import React from "react";

const Follower = ({ avatar, username, link }) => {
  return (
    <div className="follower">
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="username_and_link">
        <h4>{username}</h4>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </div>
    </div>
  );
};

export default Follower;
