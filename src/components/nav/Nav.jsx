import React from "react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { useState } from "react";

import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="/#"
        onClick={() => setActiveNav("/#")}
        className={activeNav === "/#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#information"
        onClick={() => setActiveNav("#information")}
        className={activeNav === "#information" ? "active" : ""}
      >
        <FaUser />
      </a>
      <a
        href="#sponsors"
        onClick={() => setActiveNav("#sponsors")}
        className={activeNav === "#sponsors" ? "active" : ""}
      >
        <FaBook />
      </a>
    </nav>
  );
};

export default Nav;
