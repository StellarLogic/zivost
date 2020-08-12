import React from "react";
import Image from "../image/Image";
import "./card.css";

const Card = ({ name, img, position, location, height, width }) => {
  return (
    <div className="card">
      <div className="card-img">
        <Image addClass="card-img" img={img} width={width} height={height} radius="50%" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="position">{position}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  );
};

export default Card;
