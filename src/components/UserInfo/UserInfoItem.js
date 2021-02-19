import React from "react";
import "./index.css";

const UserInfoItem = ({ label, value, icon }) => {
  return (
    <div className="item">
      <img className="item-image" src={icon} alt={label + "_image"} />
      <div className="item-data">
        <p className="data-value">{value}</p>
        <p className="data-label">{label}</p>
      </div>
    </div>
  );
};

export default UserInfoItem;
