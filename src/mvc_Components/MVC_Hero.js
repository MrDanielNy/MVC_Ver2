import React, { useEffect } from "react";
import "../mvc_Components/MVC_Hero.css";
import "../App.css";
import NavPane from "./Nav_pane";
import "./Nav_pane.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Platform from "./mvc_pages/Platform";
import video from "../images/video-2.mp4";
import video2 from "../images/video-1.mp4"
import img_Background from "../images/ATC.png"
import { useSpeechSynthesis } from 'react-speech-kit';

import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from '../theme/GlobalStyles';
import { useTheme } from '../theme/useTheme';
import { getFromLS } from '../utils/storage';


function MVC_Hero(props) {





  /** The main page */



  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });




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
  const screen_Checker = () => {
    if (window.innerWidth > 768 && window.innerHeight > 450) {
      console.log("Not a mobile screen")
      return video;
    }
    else if (window.innerHeight < 450) {
      console.log(window.innerHeight + " Mobile Screen")
      return "";
    }

  }

  const Container = styled.div`
  margin: 5px auto 5px auto;
`;



  const themesFromStore = getFromLS('all-themes');
  const [data, setData] = useState(themesFromStore.data);
  const [themes, setThemes] = useState([]);
  const { setMode } = useTheme();

  const themeSwitcher = selectedTheme => {
    console.log(selectedTheme);
    setMode(selectedTheme);
    props.setter(selectedTheme);
  };


  return (
    <>
      {
        themeLoaded && <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>

            <div className="mvc-hero-container">

              {/* A video link to have the live backgrond*/}
              <div className="background_Container_">
                {/*  <video className=".background-video" loop autoPlay muted>
                  <source src={screen_Checker()} type="video/mp4" />
                  Your browser does not support the video tag.
      </video>*/}
              </div>
              <div>
                <h1 onMouseLeave={(e) => {
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

                  }} className="title">My Virtual Classroom</h1>
                <p onMouseLeave={(e) => {
                  console.log("Hello dude!");
                  e.target.style.border = 'none';
                }} onClick={(e) => {
                  e.target.style.border = '2px solid rgba(147, 250, 165)';
                  speak({
                    text: ' Vi vill förändra dagens utbildning och bjuder in Sveriges skolor till Utbildning-2.0.'
                  })
                }} className="subTitle_">
                  Vi vill förändra dagens utbildning och bjuder in Sveriges skolor
                  till “Utbildning-2.0”.
                </p>

                <p>{/** Other staffs if needed here */}</p>
                <Link to="/Contacts">
                  <button className="hero_Btn">Contact us</button>
                </Link>
              </div>

              {/** TODO: Add a direct link to contact page or some other important links  */}
              <div>

              </div>
            </div>


          </Container>
        </ThemeProvider>
      }
    </>
  );
}
export default MVC_Hero;
