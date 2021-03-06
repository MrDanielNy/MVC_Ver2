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
import { useSpeechSynthesis } from 'react-speech-kit';
import { InfoSharp } from "@mui/icons-material";
import MVC_Home from "./mvc_pages/MVC_Home";

function NavPane() {
  const logoTab = useRef();
  const menuItem1 = useRef();
  const menuItem2 = useRef();
  const menuItem3 = useRef();
  const navBar = useRef();
  const hamMenu = useRef();



  /*React.useEffect(() => {
    logoTab.current.focus();
  }, []);*/


  const [showAccessibility, setShowAccessibility] = useState(false);

  const [click, setClick] = useState(false);

  const closeMenu = () => setClick(false);
  const handleClick = () => {
    menuItem1.current.focus();
    console.log("Testing...");
    setClick(!click);
  };

  const closeMenu_ = useCallback(e => {
    if (e.key === "Escape" && click) {
      console.log("Escape is pressed")
      setClick(false);

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

  // Opening the menu using Ctrl+Alt+M
  const menu = useCallback(e => {
    if (e.ctrlKey && e.altKey && e.code === 'KeyM') {
      setClick(!click);
      console.log(click + "Click is ----> ")
    }
  }, [])
  useEffect(() => {
    document.addEventListener("keydown", menu);
    return () => document.removeEventListener("keydown", menu)
  })

  const menu_Close = useCallback(e => {
    if (e.keyCode === 77) {
      console.log("Escape is pressed")
      setClick(!click)
    }
  }, [setClick], [click])
  useEffect(() => {
    document.addEventListener("keydown", menu_Close);
    return () => document.removeEventListener("keydown", menu_Close)
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
  var synth = window.speechSynthesis;
  const { speak } = useSpeechSynthesis();
  if (localStorage.getItem("textReaderStatus") === "true") {
    synth.resume(); // It starts reading 
  }
  else {
    synth.cancel(); // The text reader pauses.
  }
  function text_Reader(input_Text, e) {
    synth.resume();
    // e.target.style.border = '2px solid rgba(147, 250, 165)';
    speak({
      text: input_Text, name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: true, "default": true
    }
    )
  }

  let colorsMode;
  if (localStorage.getItem("colorsMode") === "true") {
    colorsMode = true;
  }
  else
    colorsMode = false;




  React.useEffect(() => {
    logoTab.current.focus();
  }, []);

  return (
    <>
      <nav tabIndex={-1} className={colorsMode ? "nav_Pane" : "safeColor_nav_Pane"} >
        <Paper ref={navBar} aria-label="navigeringsf??ltet" variant="st1" color="primary" className="navbar-container">

          <Button id="logo" tabIndex={0} className="btn" ref={logoTab} style={hamStyle} component={Link} to="/" onClick={closeMenu}>
            <div aria-label="My virtual Classrooms logotyp. V??lkommen" className="mvcLogo">
              {/*<img className="logoMVC" src={require("../images/logoMVCnew.png")} />*/}
              <span className="logo">MVC</span>
            </div>
          </Button>
          <div></div>
          <div></div>
          <div className="ham_Menu" >
            <Button id="menu" aria-label="Meny!" tabIndex={0} onFocus={(e) => {
              console.log("Menu is selected!");
              text_Reader("Meny!", e);
            }} onMouseEnter={(e) => {
              text_Reader("Meny, l??nkar till andra sidor!", e);
            }} onMouseLeave={(e) => {
              e.target.style.border = 'none';
              // synth.pause();
              synth.cancel();
            }} className="btn" ref={hamMenu} style={hamStyle} onClick={handleClick} >
              <span className={click ? "fas fa-times" : "fas fa-bars"} />
            </Button>
          </div>
        </Paper>
        <GlobalStyle />
      </nav>
      {/* Menu and links*/}
      <div className="drop-down-menu">
        <div className={click ? "menu active" : "menu"}>

          <Button onFocus={(e) => {
            text_Reader("Projekt! klicka f??r att l??sa mer om v??ra projekt", e);
          }} onMouseEnter={(e) => {
            text_Reader("Projekt! klicka f??r att l??sa mer om v??ra projekt", e);
          }} onMouseLeave={(e) => {
            e.target.style.border = 'none';
            // synth.pause();
            synth.cancel();
          }} ref={menuItem1} component={Link} to="/Projects" onClick={closeMenu} className="menu-links">
            <h1 className="menu-items"> Projekt </h1>
          </Button>


          <h5 className="menu-items">
            <Button onFocus={(e) => {
              text_Reader("Om oss: H??r finns information om grundarna till My Virtual Classroom.", e);
            }} onMouseEnter={(e) => {
              text_Reader("Om oss: H??r finns information om grundarna till My Virtual Classroom.", e);
            }} onMouseLeave={(e) => {
              e.target.style.border = 'none';
              // synth.pause();
              synth.cancel();
            }} ref={menuItem2} component={Link} to="/AboutUs" onClick={closeMenu} className="menu-links">
              <h1 className="menu-items">Om oss </h1>
            </Button>
          </h5>

          <h5 className="menu-items">
            <Button onFocus={(e) => {
              text_Reader("Kontakt: Du ??r varmt v??lkommen att h??ra av dig till oss.", e);
            }} onMouseEnter={(e) => {
              text_Reader("Kontakt: Du ??r varmt v??lkommen att h??ra av dig till oss.", e);
            }} onMouseLeave={(e) => {
              e.target.style.border = 'none';
              // synth.pause();
              synth.cancel();
            }} ref={menuItem3} component={Link} to="/Contacts" onClick={closeMenu} className="menu-links">
              <h1 className="menu-items"> Kontakta </h1>
            </Button>
          </h5                  >

        </div>
      </div>
    </>
  );
}

export default NavPane;
