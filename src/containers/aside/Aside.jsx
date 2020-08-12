import React, { useState, useEffect, Fragment } from "react";
import "./aside.css";
import Search from "../../components/search/Search";
import Tab from "../../components/tab/Tab";
import Accordion from "../../components/accordion/Accordion";
import Card from "../../components/card/Card";
import { images } from "../../assets/imgages";
import { Link } from "react-router-dom";

const initialState = [
  {
    id: 1,
    name: "Michelle",
    position: "CTO at Redington Technologies Ltd",
    location: "From Los Angeles, USA",
    img: images.profileFour,
  },
  {
    id: 2,
    name: "Emma Stone",
    position: "CEO at APAC HP Ltd.",
    location: "From Los Angeles, USA",
    img: images.profileTwo,
  },
  {
    id: 3,
    name: "Emma Stone",
    position: "CEO at APAC HP Ltd.",
    location: "From Los Angeles, USA",
    img: images.profileThree,
  },
];

const Aside = () => {
  const [card, setCard] = useState(initialState);
  const [activeTab, setActiveTab] = useState(false);
  const [collaps, setCollaps] = useState(false);

  const handleTab = (status) => {
    setActiveTab(status);
  };

  const handleCollaps = () => {
    setCollaps(!collaps);
  };

  const checkSize = () => {
    let size = window.innerWidth;

    if (size <= 992 && size >= 768) {
      setCollaps(true);
    } else if (size < 767) {
      setCollaps(false);
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
    <div className="aside" style={!collaps ? { flex: "1" } : { flex: "0" }}>
      <div className="collaps-btn" onClick={() => handleCollaps()}>
        <i className={`fa fa-angle-${collaps ? "left" : "right"}`} aria-hidden="true"></i>
      </div>
      {!collaps ? (
        <Fragment>
          <Tab onclick={handleTab} status={activeTab} />
          <Search />
          {!activeTab ? (
            <>
              <Accordion title="Government and Policymakers">
                {card.map((item) => (
                  <Card key={item.id} name={item.name} width="56px" height="56px" img={item.img} position={item.position} location={item.location} />
                ))}
                <div className="more">
                  <Link to="#">+ 23 More</Link>
                </div>
              </Accordion>
              <Accordion title="Non-governmental organizations and not-for-…">Accordion</Accordion>
              <Accordion title="Community groups and civil society organizations">Accordion</Accordion>
              <Accordion title="Health workers 'organisations & health care...">Accordion</Accordion>
              <Accordion title="Hospital/Clinic">Accordion</Accordion>
              <Accordion title="Academia">Accordion</Accordion>
              <Accordion title="Philanthropy">Accordion</Accordion>
              <Accordion title="UN agencies">Accordion</Accordion>
              <Accordion title="Business and the private sector">Accordion</Accordion>
            </>
          ) : (
            <div className="collection">
              <h1 className="collection-title">Collection</h1>
              {card.map((item) => (
                <Card key={item.id} name={item.name} width="56px" height="56px" img={item.img} position={item.position} location={item.location} />
              ))}
              <div className="more">
                <Link to="#">+ 23 More</Link>
              </div>
            </div>
          )}
        </Fragment>
      ) : null}
    </div>
  );
};

export default Aside;
