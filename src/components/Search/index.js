import React, { useState, useContext } from "react";
import Loupe from "./../../images/loupe.svg";
import GithubContext from "./../../context/GithubContext";
import "./index.css";

const Search = () => {
  const { setUser, rateLimit } = useContext(GithubContext);
  const [inputValue, setInputValue] = useState("");

  return (
    <form className="search" action="">
      <div className="search-field">
        <img src={Loupe} alt="search" className="search-icon" />
        <input
          type="text"
          className="search--input"
          placeholder="enter github username"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
        <button
          className="search--button"
          onClick={(e) => {
            e.preventDefault();
            setUser(inputValue);
          }}
        >
          search
        </button>
      </div>
      <p className="search--requests">requests : {rateLimit}/60 per hour</p>
    </form>
  );
};

export default Search;
