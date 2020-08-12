import React from "react";
import Image from "../../../components/image/Image";
import Primebtn from "../../../components/buttons/prime/Primebtn";
import { images } from "../../../assets/imgages";
import "../page.css";

const Marketplace = () => {
  return (
    <div className="home">
      <div className="greeting-img">
        <Image img={images.profileFour} height="179px" width="179px" radius="50%" />
      </div>
      <h1 className="title">John Doe</h1>
      <h3 className="sub-title">
        <span className="bold">CTO </span>
        at
        <span className="bold"> Redington Technologies Ltd </span>
        {window.innerWidth <= 576 ? <br /> : null}
        <span className="second-text">
          From <span className="bold"> Los Angeles, USA</span>
        </span>
      </h3>
      <div className="btn-wrapper">
        <Primebtn link="/connect" classadd="home-connect">
          <span>
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
          CONNECT
        </Primebtn>
      </div>
      <div className="para">
        <p>Michelle is a Senior Marketing Manager at HubSpot.</p>
        <p>
          An inbound marketing and sales platform that helps companies attract visitors, convert leads, and close customers. Previously, Rodney worked
          as a marketing manager for a tech software startup. He graduated with honors from Columbia University with a dual degree in Business
          Administration and Creative Writing.
        </p>
      </div>
      <ul className="list">
        <li className="list-title">Time Zone</li>
        <li className="list-title">Website</li>
        <li className="list-sub">Asia/Kolkata GMT +05:30</li>
        <li className="list-sub">
          <a target="_blank" href="https://www.hubspot.com">
            https://www.hubspot.com
          </a>
        </li>
      </ul>
      <p className="report">Report Emma</p>
    </div>
  );
};

export default Marketplace;
