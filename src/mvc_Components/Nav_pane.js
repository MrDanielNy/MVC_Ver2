import React from "react";
import { FaBeer } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./Nav_pane.css";
import styled from "styled-components";
import ModalAccessibility from "./mvc_pages/Modal_Accessibility";
import "../mvc_Components/mvc_pages/Modal_Accessibility.css"
import { GlobalStyle } from "./mvc_pages/GlobalStyle";


function NavPane() {
  const [showAccessibility, setShowAccessibility] = useState(false);
  const openAccessibilitySettings = () => {
    setShowAccessibility(prev => !prev) // If it is true, change it to false
  }

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
            MVC
          </Link>
          <div></div>
          <div></div>
          <div className="ham_Menu" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
        <div className="accessibility_Icon"> <img onClick={openAccessibilitySettings} src={require("../images/accessibility_Icon.png")} /></div>
        <ModalAccessibility showAccessibility={showAccessibility} setShowAccessibility={setShowAccessibility} />
        <GlobalStyle />


      </nav>
      {/* Menu and links*/}
      <div className="drop-down-menu">
        <ul className={click ? "menu active" : "menu"}>
          <li className="menu-items">
            <Link to="/Projects" className="menu-links" onClick={closeMenu}>
              <button className="project_Btn">Projects</button>
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
