import React from "react";
import Navbar from "./containers/header/Header";
import Layout from "./containers/layout/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/pages/home/Home";
import Live from "./containers/pages/live/Live";
import Speakers from "./containers/pages/speakers/Speakers";
import Marketplace from "./containers/pages/marketplace/Marketplace";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Layout Page={Home} />
        </Route>
        <Route exact path="/live">
          <Layout Page={Live} />
        </Route>
        <Route exact path="/innovation-marketplace">
          <Layout Page={Marketplace} />
        </Route>
        <Route exact path="/speakers">
          <Layout Page={Speakers} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
