import React, { useCallback, useRef } from "react";
import { FaBeer } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./Nav_pane.css";
import styled from "styled-components";
import ModalAccessibility from "./mvc_pages/Modal_Accessibility";
import "../mvc_Components/mvc_pages/Modal_Accessibility.css"
import { GlobalStyle } from "./mvc_pages/GlobalStyle";
import {
  Button,
  Paper,
  Typography,
  Box,
  ThemeProvider,
  createTheme
} from "@mui/material";

function NavPane() {
  const logoTab = useRef()
  const menuItem = useRef();

  const hamMenu = useRef()
  React.useEffect(() => {
    hamMenu.current.focus();
  }, []);

  const [showAccessibility, setShowAccessibility] = useState(false);
  const openAccessibilitySettings = () => {
    setShowAccessibility(prev => !prev) // If it is true, change it to false
  }

  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const handleClick = () => {
    console.log("Testing...");


    menuItem.current.focus();


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

  const hamStyle = {


    backgroundColor: "#fafafa00", // rgba(250, 250, 250, 0)
    textAlign: "center",
    height: "50px",
    width: "100px",
    color: 'white',
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontSize: "30px"
  }
  return (
    <>
      <nav className="nav_Pane">
        <Paper variant="st1" color="primary" className="navbar-container">

          <Button className="btn" ref={logoTab} style={hamStyle} component={Link} to="/" onClick={closeMenu}>
            <div className="mvcLogo">
              MVC
            </div>
          </Button>
          <div></div>
          <div></div>
          <div className="ham_Menu" >
            <Button className="btn" ref={hamMenu} style={hamStyle} onClick={handleClick} >
              <span className={click ? "fas fa-times" : "fas fa-bars"} />
            </Button>
          </div>
        </Paper>

        <GlobalStyle />


      </nav>
      {/* Menu and links*/}
      <div className="drop-down-menu">
        <div className={click ? "menu active" : "menu"}>

          <Button ref={menuItem} component={Link} to="/Projects" onClick={closeMenu} className="menu-links">


            <h1 className="menu-items"> Projekt </h1>
          </Button>


          <h5 className="menu-items">
            <Button component={Link} to="/AboutUs" onClick={closeMenu} className="menu-links">
              <h1 className="menu-items">Om oss </h1>
            </Button>
          </h5>

          <h5 className="menu-items">
            <Button component={Link} to="/Contacts" onClick={closeMenu} className="menu-links">
              <h1 className="menu-items"> Kontakta </h1>
            </Button>
          </h5                  >

        </div>
      </div>
    </>
  );
}

export default NavPane;
