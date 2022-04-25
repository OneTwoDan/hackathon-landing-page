import React from "react";
import "./home.css";
import Information from "../information/Information";
import Nav from "../nav/Nav";
import Sponsors from "../sponsors/Sponsors";
import Landing from "../landing/Landing";

const Home = () => {
  return (
    <div>
      <Landing />
      <Nav />
      <Information />
      <Sponsors />
    </div>
  );
};

export default Home;
