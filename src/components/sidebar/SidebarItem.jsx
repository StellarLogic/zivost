import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ title, logo, active, link, onclick, id }) => {
  return (
    <Link to={link} className={`sidebar-item ${active ? "active" : ""}`} onClick={(e) => onclick(id)}>
      <img src={logo} alt="" />
      <span>{title}</span>
    </Link>
  );
};

export default SidebarItem;
