import React from "react";
import "./search.css";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="search-wrapper">
      <input className="search" type="text" name="" id="" placeholder="search" />
      <Link to="#" className="filter">
        FILTER
      </Link>
    </div>
  );
};

export default Search;
