import React, { useCallback } from "react";
import { FaBeer } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./Nav_pane.css";
import styled from "styled-components";
import ModalAccessibility from "./mvc_pages/Modal_Accessibility";
import "../mvc_Components/mvc_pages/Modal_Accessibility.css"
import { GlobalStyle } from "./mvc_pages/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import { DivHeader, Button, greenTheme, redTheme, DarkTheme, GeneralTheme_AccessibilityWindow, LightThemeNavbar } from '../mvc_Components/mvc_pages/styles/index';
import ThemeToggler from '../mvc_Components/mvc_pages/ThemeToggler';
import { ThemeContext } from 'styled-components';
import sendToNav from "../mvc_Components/mvc_pages/Modal_Accessibility"
import { useContext } from "react"
function NavPane(props) {
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

  const closeMenu_ = useCallback(e => {
    if (e.key === "Escape" && click) {
      console.log("Escape is pressed")
      setClick(false)
    }
    else
      if (e.key === "Escape" && !click) {
        setClick(false)
      }

  }, [setClick], [click])
  useEffect(() => {
    document.addEventListener("keydown", closeMenu_);
    return () => document.removeEventListener("keydown", closeMenu_)
  })



  const menu = useCallback(e => {
    if (e.keyCode === 77) {
      console.log("Escape is pressed")
      click(true)
    }


  }, [setClick], [click])
  useEffect(() => {
    document.addEventListener("keydown", menu);
    return () => document.removeEventListener("keydown", menu)
  })

  const { theme, toggleTheme } = useContext(ThemeContext);
  // Add local storage
  localStorage.setItem("theme", theme);
  console.log("Here we goooooo  " + localStorage.getItem("theme"))
  return (
    <>
      <nav className="nav_Pane">
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ThemeProvider theme={theme === "light" ? LightThemeNavbar : DarkTheme}>
            <DivHeader className="navbar-container">
              <Link to="/" className="MVC-Logo" onClick={closeMenu}>
                MVC
              </Link>
              <div></div>
              <div></div>
              <div className="ham_Menu" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
            </DivHeader>
          </ThemeProvider>


          <div className="accessibility_Icon"> <img onClick={openAccessibilitySettings} src={require("../images/accessibility_Icon.png")} /></div>
          <ModalAccessibility showAccessibility={showAccessibility} setShowAccessibility={setShowAccessibility} />
          <GlobalStyle />
        </ThemeContext.Provider>


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
