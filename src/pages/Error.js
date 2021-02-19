import React from "react";
import { Link } from "react-router-dom";
import "./../index.css";

const Error = () => {
  return (
    <div className="error-page">
      <h1 className="h1-404">404</h1>
      <h3 className="error-message">
        sorry, the page you tried cannot be found
      </h3>
      <Link to="/" className="back-home-btn">
        Back Home
      </Link>
    </div>
  );
};
export default Error;
