import React, { useCallback } from "react";
import { FaBeer } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./Nav_pane.css";

import ModalAccessibility from "./mvc_pages/Modal_Accessibility";
import "../mvc_Components/mvc_pages/Modal_Accessibility.css"
import { GlobalStyle } from "./mvc_pages/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from '../theme/GlobalStyles';
import { useTheme } from '../theme/useTheme';




const Container = styled.div`
  margin: 5px auto 5px auto;
`;

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

  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [showDialog, setShowDialog] = useState(false);
  const [newTheme, setNewTheme] = useState();

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  return (
    <>
      {
        themeLoaded && <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
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
              <ModalAccessibility showAccessibility={showAccessibility} setShowAccessibility={setShowAccessibility} setter={setSelectedTheme} newTheme={newTheme} />
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
          </Container>
        </ThemeProvider>
      }
    </>
  );
}

export default NavPane;
