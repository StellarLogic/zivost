import React, { useState, useEffect } from "react";
import { images } from "../../assets/imgages";
import SidebarItem from "./SidebarItem";
import "./sidebar.css";

const initialState = [
  { id: 1, name: "RECEPTION", img: images.home, active: true, link: "/" },
  { id: 2, name: "LIVE", img: images.broadcast, active: false, link: "/live" },
  { id: 3, name: "INNOVATION MARKETPLACE", img: images.booth, active: false, link: "/innovation-marketplace" },
  { id: 4, name: "SPEAKERS", img: images.speaker, active: false, link: "/speakers" },
];

const Sidebar = () => {
  const [nav, setnav] = useState(initialState);
  const [collaps, setCollaps] = useState(false);

  const handleActive = (id) => {
    const updatedNav = nav.map((item) => {
      item.id === id ? (item.active = true) : (item.active = false);
      return item;
    });

    setnav([...updatedNav]);
  };

  const handleCollaps = () => {
    setCollaps(!collaps);
  };

  const checkSize = () => {
    let size = window.innerWidth;

    if (size <= 767) {
      setCollaps(true);
    } else {
      setCollaps(false);
    }
  };

  useEffect(() => {
    checkSize();
    window.addEventListener("resize", function () {
      checkSize();
    });
  }, []);

  return (
    <div className="sidebar" style={collaps ? { width: "0", maxWidth: "auto" } : { width: "70px", maxWidth: "70px" }}>
      <div className="collaps-btn" onClick={() => handleCollaps()}>
        <i className={`fa fa-angle-${!collaps ? "left" : "right"}`} aria-hidden="true"></i>
      </div>
      {!collaps
        ? nav.length
          ? nav.map((item) => (
              <SidebarItem
                id={item.id}
                onclick={handleActive}
                key={item.id}
                title={item.name}
                logo={item.img}
                active={item.active}
                link={item.link}
              />
            ))
          : initialState.map((item) => (
              <SidebarItem
                id={item.id}
                onclick={handleActive}
                key={item.id}
                title={item.name}
                logo={item.img}
                active={item.active}
                link={item.link}
              />
            ))
        : null}
    </div>
  );
};

export default Sidebar;
