import React from "react";
import { FaBeer } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import $ from "jquery";

import "./Nav_pane.css";
import MVC_Home from "./mvc_pages/MVC_Home";

function NavPane() {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const handleClick = () => {
    console.log("Testing...");
    setClick(!click);
  };

  return (
    <>
      <nav className="nav_Pane">
        <div className="navbar-container">
          <Link to="/" className="MVC-Logo" onClick={closeMenu}>
            MVC Logo
          </Link>
          <div></div>
          <div></div>
          <div className="ham_Menu" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
      {/* Menu and links*/}
      <div className="drop-down-menu">
        <ul className={click ? "menu active" : "menu"}>
          <li className="menu-items">
            <Link to="/Projects" className="menu-links" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className="menu-items">
            <Link to="/AboutUs" className="menu-links" onClick={closeMenu}>
              About us
            </Link>
          </li>
          <li className="menu-items">
            <Link to="/Contacts" className="menu-links" onClick={closeMenu}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavPane;
