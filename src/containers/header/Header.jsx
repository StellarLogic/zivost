import React from "react";
import { images } from "../../assets/imgages";
import "./header.css";
import Live from "../../components/buttons/live/Live";
import Image from "../../components/image/Image";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <div className="logo">
          <Link to="/">
            <img src={images.logoSm} alt="" />
          </Link>
        </div>
        <div className="live-wrapper">
          <Live>Live</Live>
        </div>
        <div className="time">
          <h6>2:30 PM : LIFE4ME+</h6>
          <p>E-Health system for those living with HIV</p>
        </div>
      </div>
      <div className="right">
        <Link to="/" href="" className="contact">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          <span>contact</span>
        </Link>
        <Image img={images.headerProfile} height="40px" width="40px" />
      </div>
    </div>
  );
};

export default Header;
