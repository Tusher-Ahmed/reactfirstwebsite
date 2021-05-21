import React from "react";
import Navbar from "../Navbar/Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Service from "./Service.js";
import Contact from "./Contact.js";
import Price from "../pricing/MainPrice";
import { Redirect, Route, Switch } from "react-router-dom";

const MainBody = () => {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/about" exact render={() => <About />} />
        <Route path="/service" exact render={() => <Service />} />
        <Route path="/contact" exact render={() => <Contact />} />
        <Route path="/pricing" exact render={() => <Price />} />
      </Switch>
      <Redirect to="/" />
    </div>
  );
};
export default MainBody;
