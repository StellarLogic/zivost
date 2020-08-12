import React from "react";
import "../button.css";
import { Link } from "react-router-dom";

const Primebtn = ({ children, link, classadd }) => {
  return (
    <Link to={link} className={`prime-btn ${classadd}`}>
      {children}
    </Link>
  );
};

export default Primebtn;
