import React from "react";

const Profilepic = ({ width, height, img, radius, addClass }) => {
  return <img className={`${addClass ? addClass : null}`} src={img} alt="" style={{ width, height, borderRadius: radius }} />;
};

export default Profilepic;
