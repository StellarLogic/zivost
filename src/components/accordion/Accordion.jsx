import React, { useState } from "react";
import "./accordion.css";

const Accordion = ({ title, children }) => {
  const [active, setActive] = useState(false);
  const handleAccord = () => {
    setActive(!active);
  };
  return (
    <div className="accord">
      <div className="accord-title" onClick={() => handleAccord()}>
        <span>{title}</span>
        <span className="icon">
          {active ? <i className="fa fa-minus" aria-hidden="true"></i> : <i className="fa fa-plus" aria-hidden="true"></i>}
        </span>
      </div>
      {active && <div className="content">{children}</div>}
    </div>
  );
};

export default Accordion;
