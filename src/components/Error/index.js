import React from "react";
import "./index.css";

const Error = ({ error, setError }) => {
  return (
    <div className="error-backdrop" onClick={() => setError(null)}>
      <div className="inside">
        <div className="close" onClick={() => setError(null)}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="error-message">
          {error === "Not Found"
            ? "there is no user with that username"
            : error}
        </div>
      </div>
    </div>
  );
};

export default Error;
