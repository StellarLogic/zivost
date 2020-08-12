import React, { useState } from "react";
import "./tab.css";

const Tab = ({ onclick, status }) => {
  const [active, setactive] = useState(false);
  return (
    <div className="tab">
      <span className={`${!status ? "active" : ""}`} onClick={() => onclick(false)}>
        Discovery
      </span>
      <span className={`${status ? "active" : ""}`} onClick={() => onclick(true)}>
        My Connections
      </span>
    </div>
  );
};

export default Tab;
