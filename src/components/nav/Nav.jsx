import React from "react";
import { FaHome } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { GiTrophy } from "react-icons/gi";
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
        <HiInformationCircle />
      </a>
      <a
        href="#sponsors"
        onClick={() => setActiveNav("#sponsors")}
        className={activeNav === "#sponsors" ? "active" : ""}
      >
        <GiTrophy />
      </a>
    </nav>
  );
};

export default Nav;
