import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <header>
      <div className="container landing_container">
        <h1 className="header-title">HACKATHON 2022</h1>
        <h4>28 AL 30 DE ABRIL</h4>
        <h2 className="header-title2">TAXIS LIBRES</h2>
        <Link to="/register">
          <button className="btn">REGISTRO</button>
        </Link>
      </div>
    </header>
  );
};

export default Landing;
