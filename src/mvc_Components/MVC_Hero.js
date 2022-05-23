import React, { useRef } from "react";
import { useState } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';

import "../mvc_Components/MVC_Hero.css";
import "../App.css";
import NavPane from "./Nav_pane";
import "./Nav_pane.css";
import { Link } from "react-router-dom";


import Platform from "./mvc_pages/Platform";

import video2 from "../images/video-1.mp4"
import backgrund from "../images/HeroSmallSize.png"
import img_Background from "../images/ATC.png"


import { PrismCode } from 'react-prism';
import { Player, ControlBar } from 'video-react';

import {
  Button,
  Paper,
  Typography,
  Box,
  ThemeProvider,
  createTheme
} from "@mui/material";


function MVC_Hero(props) {


  var synth = window.speechSynthesis; // To achieve the speechSynthesis' internal functions
  const { speak } = useSpeechSynthesis(); // Main function to read a text

  // Saving the status of the screen reader
  localStorage.setItem("screenReaderStatus", "true");



  if (localStorage.getItem("textReaderStatus") === "true") {
    synth.resume();
  }
  else {
    synth.cancel();
  }

  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const handleClick = () => {
    setClick(!click);
  };
  function text_Reader(input_Text, e) {
    synth.resume(); // To resume the paused voice 
    e.target.style.border = '4px solid lightgreen'; // To have a border to show focus.
    // It reads the input_Text
    speak({
      text: input_Text, name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: true, "default": true
    }
    )
  }
  const projectBtn = useRef();
  const mvc = useRef();

  return (
    <>
      <div className="mvc-hero-container" >

        <div>
          <Typography ref={mvc} aria-label={"My Virtual Classroom"} tabIndex={0} variant="h1" sx={{
            fontSize: {
              lg: 100,
              md: 70,
              sm: 50,
              xs: 30,
            }
          }} onFocus={(e) => {
            text_Reader("My virtal Classroom!", e);
          }} onMouseLeave={(e) => { // To pause the reader temporarily by onMouseLeave
            if (localStorage.getItem("btnCognitive") != "lightgreen") {
              e.target.style.border = 'none';
            }
            synth.cancel();
          }}
            onMouseEnter={(e) => { // To read the text by onMouseEnter or continue reading after a pause
              text_Reader("My virtal Classroom", e);
            }} color="secondary" className="title">My Virtual Classroom</Typography>



          <Typography tabIndex={0} variant="h2" onMouseLeave={(e) => {
            if (localStorage.getItem("btnCognitive") != "lightgreen") {
              e.target.style.border = 'none';
            }
            synth.cancel();
          }} onMouseEnter={(e) => {
            text_Reader("En framtid på lika villkor", e);
          }} className="subTitle_">
            - En framtid på lika villkor
          </Typography>

          <p>{/** Other staffs if needed here */}</p>
          <div className="hero_Btn_container">
            <Link to="/Contacts" className="hero_Btn_Link">
              <Button aria-label="Kontakta oss! Tryck på knappen!" onMouseEnter={(e) => {
                text_Reader("Kontakta oss! Tryck på knappen!", e);
              }}
                onMouseLeave={(e) => {
                  if (localStorage.getItem("btnCognitive") != "lightgreen") {
                    e.target.style.border = 'none';
                  }
                  synth.cancel();
                }}
                variant="contained" color="secondary" className="hero_Btn"> <Typography variant="h6">Kontakta oss</Typography></Button>
            </Link>
          </div>
        </div>
        <div>
        </div>
      </div >
    </>
  );
}
export default MVC_Hero;
