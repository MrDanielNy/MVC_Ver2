import React, { useRef } from "react";
import "../mvc_Components/MVC_Hero.css";
import "../App.css";
import NavPane from "./Nav_pane";
import "./Nav_pane.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Platform from "./mvc_pages/Platform";

import video2 from "../images/video-1.mp4"
import backgrund from "../images/HeroSmallSize.png"
import img_Background from "../images/ATC.png"
import { useSpeechSynthesis } from 'react-speech-kit';

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
  var synth = window.speechSynthesis;
  const { speak } = useSpeechSynthesis();
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
    synth.resume();
    e.target.style.border = '2px solid rgba(147, 250, 165)';
    speak({
      text: input_Text, name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: true, "default": true
    }
    )
  }
  const projectBtn = useRef();

  return (
    <>
      <div className="mvc-hero-container" >

        <div>
          <Typography tabIndex={2} variant="h1" sx={{
            fontSize: {
              lg: 100,
              md: 70,
              sm: 50,
              xs: 30,
            }
          }} onMouseLeave={(e) => {
            e.target.style.border = 'none';
            // synth.pause();
            synth.cancel();
          }}
            onMouseEnter={(e) => {
              text_Reader("My virtal Classroom", e);

            }} color="secondary" className="title">My Virtual Classroom</Typography>


          <Typography tabIndex={3} variant="h3" onMouseLeave={(e) => {
            e.target.style.border = 'none';
            synth.cancel();
          }} onMouseEnter={(e) => {
            text_Reader("En framtid på lika villkor", e);
          }} className="subTitle_">
            - En framtid på lika villkor
          </Typography>

          <p>{/** Other staffs if needed here */}</p>
          <div className="hero_Btn_container">
            <Link tabIndex={4} to="/Contacts" className="hero_Btn_Link">
              <Button aria-label="Kontakta oss! Tryck på knappen!" onMouseEnter={(e) => {
                text_Reader("Kontakta oss! Tryck på knappen!", e);
              }}
                onMouseLeave={(e) => {
                  e.target.style.border = 'none';
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
