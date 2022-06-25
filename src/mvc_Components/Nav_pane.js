import React, { useCallback, useRef } from "react";
import { FaBeer } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
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
import { Cross as Hamburger } from 'hamburger-react'
function NavPane() {
  const logoTab = useRef();
  const menuItem1 = useRef();
  const menuItem2 = useRef();
  const menuItem3 = useRef();
  const navBar = useRef();
  const hamMenu = useRef();

  const [showAccessibility, setShowAccessibility] = useState(false);

  const [click, setClick] = useState(false);

  const closeMenu = () => setClick(false);
  const handleClick = () => {
    // menuItem1.current.focus();
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


  /*React.useEffect(() => {
    logoTab.current.focus();
  }, []);*/
  const navigate = useNavigate();

  const navigateHome = () => {
    // navigate to /
    closeMenu();
    navigate('/');
  };
  return (
    <>
      <nav tabIndex={-1} className={colorsMode ? "nav_Pane" : "safeColor_nav_Pane"} >
        <Paper ref={navBar} aria-label="navigeringsfältet" variant="navbar" color="primary" className="navbar-container">

          <div aria-label="My virtual Classrooms logotyp. Välkommen" className="MVC-Logo">
            <button tabIndex={-1} id="logo" ref={logoTab} onClick={navigateHome}>
              <img tabIndex={0} className="MVC-Logo" src={require("../images/logoMvc2.png")} />
            </button>
            {/* <span className="logo">MVC</span>*/}
          </div>

          <div></div>
          <div></div>
          <div className="ham_Menu" >
            <button id="menu" aria-label="Meny!" onFocus={(e) => {
              console.log("Menu is selected!");

              text_Reader("Meny!", e);
            }} onMouseEnter={(e) => {
              text_Reader("Meny, länkar till andra sidor!", e);
            }} onMouseLeave={(e) => {
              e.target.style.border = 'none';
              // synth.pause();
              synth.cancel();
            }} className="hamMenyBtn" ref={hamMenu} onClick={handleClick} >
              {/*<span className={click ? "fas fa-times" : "fas fa-bars"} />*/}
              <Hamburger tabIndex={0} className="ham_Menu" size={40} toggled={click} toggle={setClick}
                duration={0.3} hideOutline={true} label="Meny" color="white" />
            </button>
          </div>
        </Paper>
        <GlobalStyle />
      </nav>
      {/* Menu and links*/}
      <div className="drop-down-menu">
        <div className={click ? "menu active" : "menu"}>

          <button onFocus={(e) => {
            text_Reader("Projekt! klicka för att läsa mer om våra projekt", e);
          }} onMouseEnter={(e) => {
            text_Reader("Projekt! klicka för att läsa mer om våra projekt", e);
          }} onMouseLeave={(e) => {
            e.target.style.border = 'none';
            // synth.pause();
            synth.cancel();
          }} ref={menuItem1} component={Link} to="/" onClick={closeMenu} className="menu-links">
            <h1 className="menu-items">Projekt</h1>
          </button>



          <button onFocus={(e) => {
            text_Reader("Om oss: Här finns information om grundarna till My Virtual Classroom.", e);
          }} onMouseEnter={(e) => {
            text_Reader("Om oss: Här finns information om grundarna till My Virtual Classroom.", e);
          }} onMouseLeave={(e) => {
            e.target.style.border = 'none';
            // synth.pause();
            synth.cancel();
          }} ref={menuItem2} component={Link} to="/" onClick={closeMenu} className="menu-links">
            <h1 className="menu-items">Om oss</h1>
          </button>



          <button onFocus={(e) => {
            text_Reader("Kontakt: Du är varmt välkommen att höra av dig till oss.", e);
          }} onMouseEnter={(e) => {
            text_Reader("Kontakt: Du är varmt välkommen att höra av dig till oss.", e);
          }} onMouseLeave={(e) => {
            e.target.style.border = 'none';
            // synth.pause();
            synth.cancel();
          }} ref={menuItem3} component={Link} to="/Contacts" onClick={closeMenu} className="menu-links">
            <h1 className="menu-items">Kontakta</h1>
          </button>


        </div>
      </div>
    </>
  );
}

export default NavPane;
