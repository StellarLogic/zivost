import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./layout.css";
import Aside from "../aside/Aside";

const Layout = ({ Page }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Page />
      </div>
      <Aside />
    </div>
  );
};

export default Layout;
