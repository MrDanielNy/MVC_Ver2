import React from "react";
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
  console.log("Yohooooooo " + props.bkg)

  const { speak } = useSpeechSynthesis();
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const handleClick = () => {
    console.log("Testing...");

    setClick(!click);
  };
  /** It checks the screen size. If the screen is small, it sends an empty 
   * string to Video as source and the background image in CSS shows.
   */



  /*
  console.log("********************************************************")
  console.log("Video before localS " + video);
  console.log(localStorage.getItem("Background") + " <---------------")
  console.log("Video is =======form address=========> " + video)
  // video = localStorage.getItem("Background");
  console.log("Video is =======from local Storage=========> " + video)
  console.log("********************************************************")*/

  return (
    <>
      <div className="mvc-hero-container">

        <div>
          <Typography variant="h1" sx={{
            fontSize: {
              lg: 100,
              md: 70,
              sm: 50,
              xs: 30,
            }
          }} onMouseLeave={(e) => {
            console.log("Hello dude!");
            e.target.style.border = 'none';
          }}
            onClick={(e) => {
              console.log("Hello dude!");
              e.target.style.border = '2px solid rgba(147, 250, 165)';
              speak({
                text: "My virtual Classroom", name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: true, "default": true
              }
              )

            }} className="title">My Virtual Classroom</Typography>
          <Typography variant="h3" onMouseLeave={(e) => {
            e.target.style.border = 'none';
          }} onClick={(e) => {
            e.target.style.border = '2px solid rgba(147, 250, 165)';
            speak({
              text: ' - En framtid på lika villkor'
            })
          }} className="subTitle_">
            - En framtid på lika villkor
          </Typography>

          <p>{/** Other staffs if needed here */}</p>
          <div className="hero_Btn_container">
            <Link to="/Contacts" className="hero_Btn_Link">
              <Button variant="contained" color="secondary" className="hero_Btn">Kontakta oss</Button>
            </Link>
          </div>
        </div>

        {/** TODO: Add a direct link to contact page or some other important links  */}
        <div>

        </div>

      </div>
    </>
  );
}
export default MVC_Hero;
