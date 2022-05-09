import "./App.css";
import NavPane from "./mvc_Components/Nav_pane";
import React, { useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import MVC_Home from "./mvc_Components/mvc_pages/MVC_Home";
import MVC_Projects from "./mvc_Components/mvc_pages/MVC_Projects";
import MVC_AboutUs from "./mvc_Components/mvc_pages/MVC_AboutUs";
import MVC_Contacts from "./mvc_Components/mvc_pages/MVC_Contacts";
import baseTheme from "./mvc_Components/mvc_pages/BaseTheme/Styles";
import { useState, useEffect } from "react";
import { deepmerge } from "@mui/utils";
import { theme1, theme2 } from "./mvc_Components/mvc_pages/theme/AccessibilityThemes"
import video from "./images/video-2.mp4";
//import VideoPlayer from "./mvc_Components/mvc_pages/videoBackground/VideoPlayer";

import "./mvc_Components/mvc_pages/Modal_Accessibility.css"
import styled from "styled-components"
import {
  Button,
  Paper,
  Typography,
  Box,
  ThemeProvider,
  createTheme
} from "@mui/material";
import { Player } from "video-react";
import { MdClose } from "react-icons/md"
import { style } from "@mui/system";

import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness2Icon from '@mui/icons-material/Brightness2';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ContrastIcon from '@mui/icons-material/Contrast';
import CropFreeIcon from '@mui/icons-material/CropFree';
import RestartAltSharpIcon from '@mui/icons-material/RestartAltSharp';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
const Background = styled.div`
position:fixed;
display:flex;
align-items:center;
height:100%;
width:100%;
left:10px
border-radius: 10px;
background-color:#c4c4c444;
z-index:4000;
curser:pointer;


`
const Accessibility_Wrapper = styled.div`
position: fixed;
width: 450px;
height: 600px;
box-shadow: 0 5px 16px rgba(0, 0, 0, .4);
background: #c4bdbd;
display: flex;
flex-direction: row;
justify-content: center;

z-index: 2;
border-radius: 20px;
margin-bottom: 50px;
bottom: -10px;
left: 10px;

transition: all 2s ease-out;
`
const Accessibility_Window_Content = styled.div`
position: fixed;
display: flex;
flex-direction: column;
line-height: 1.8;
color: black;
left: 80px
position: absolute;
border-radius: 20px;

`



const CloseAccessibilitySettings = styled(MdClose)`
cursor: pointer;
position: absolute;
top: 10px;
left: 10px;
width: 32px;
height: 32px;
padding: 0;
z-index:2;
color: black;
background-color: white;
border-radius: 100px
  `;


function App(props) {
  const light = useRef();
  const dark = useRef();
  const blind = useRef();
  const backgroundAnimation = useRef();

  const [bkColor, setBkcolor] = useState(true);
  const [btnLight, setBtnLight] = useState("white");
  const [btnDark, setBtnDark] = useState("white");
  const [btnBlind, setBtnBlind] = useState("white");
  const [btnBackGround, setBtnBackGround] = useState("white");
  const [theme, setTheme] = useState(baseTheme);
  const handleSwitch = (whichTheme) => {
    const newTheme = deepmerge(theme, whichTheme);
    setTheme(createTheme(newTheme));
    console.log("Theme after setting .....> " + localStorage.getItem("Theme"))
    // localStorage.setItem("MVC_Theme", theme)
    console.log("The theme in app is .....>>" + theme)

  };
  console.log("Saved");

  // console.log("The theme from the hard disk is ...." + JSON.stringify(baseTheme));
  const [activeProfile, setActiveProfile] = useState(localStorage.getItem("ActiveProfile"));

  let fullTeme = theme;
  if (activeProfile === null || activeProfile === "") {
    setActiveProfile(" Ljus")
    fullTeme = baseTheme;
    localStorage.setItem("ActiveProfile", " Ljus")
  } else
    if (activeProfile === " Mörkt") {
      fullTeme = theme1;
    }
    else
      if (activeProfile === " Synskadad") {
        fullTeme = theme2;
      }
  React.useEffect(() => {
    handleSwitch(fullTeme);
  }, []);
  const accessibilitySetting = useRef();


  const [showAccessibility, setShowAccessibility] = useState(false);
  const openAccessibilitySettings = () => {
    console.log("!!!!!!!!!!!!!!!!!!" + typeof localStorage.getItem("playMode"))
    if (localStorage.getItem("PlayerModeText") === "AV") {
      console.log("Key is empty in local storage!")

      localStorage.setItem("backgroundAnimation", "lightgreen")
    }
    console.log("Clicked on the icon ")
    setShowAccessibility(prev => !prev) // If it is true, change it to false
  }

  const closeAccessibilitySetting = e => {

    if (accessibilitySetting.current === e.target) {
      setShowAccessibility(false)
    }
  }

  const getVideo = useRef(null);
  const [btnDisable, setBtnDisable] = useState(false)

  let mobileSize = false;
  const screen_Checker = () => {
    if (window.innerWidth > 768 && window.innerHeight > 450) {
      console.log("Not a mobile screen");
      mobileSize = false;
      console.log("/////BTN is " + btnDisable + "####");
      return video;
    }
    else if (window.innerHeight < 450) {
      console.log(window.innerHeight + " Mobile Screen")
      mobileSize = true;
      console.log("***BTN is*** " + btnDisable);
      return "";
    }


  }
  console.log(mobileSize)
  React.useEffect(() => {
    setBtnDisable(mobileSize)
  }, []);

  console.log("vvvvvvvvvv+ " + mobileSize + "<<<<<>>>>> " + btnDisable)
  const [playerState, setPlayerState] = useState(
    true
  );

  const [playerMode_text, setPlayerMode_Text] = useState(localStorage.getItem("PlayerModeText"));
  if (playerMode_text === null || playerMode_text === "") {
    setPlayerMode_Text("AV");
    localStorage.setItem("PlayerModeText", "AV");
  }
  let auto_Player = true;
  const [autoPlayer, setAutoPlayer] = useState("");
  const [playerMode, setPlayerMode] = useState(localStorage.getItem("PlayerMode"));
  console.log("PlayerMode in localstorage is -------> " + playerMode)

  if (playerMode === "false") {
    auto_Player = false;
  }
  else {
    auto_Player = true;
  }

  React.useEffect(() => {
    setAutoPlayer(auto_Player)
  }, []);
  if (playerMode === null || playerMode === "") {
    setPlayerMode(true);
    localStorage.setItem("PlayerMode", true)
  }
  const playVideo = () => {
    getVideo.current.play()
    setPlayerMode(true);
    setPlayerMode_Text("AV");
    backgroundAnimation.current.style.backgroundColor = "lightgreen";
    localStorage.setItem("backgroundAnimation", "lightgreen")
    localStorage.setItem("PlayerModeText", "AV");
    localStorage.setItem("PlayerMode", true);
  };

  const pauseVideo = () => {
    getVideo.current.pause();
    setPlayerMode(false)
    setPlayerMode_Text("PÅ")
    backgroundAnimation.current.style.backgroundColor = "white";
    localStorage.setItem("backgroundAnimation", "white")
    localStorage.setItem("PlayerModeText", "PÅ");
    localStorage.setItem("PlayerMode", false);

  };

  const togglePlay = () => {
    setBkcolor(!bkColor);
    // setPlayerMode(!localStorage.getItem("PlayerMode"))
    localStorage.setItem("PlayerMode", !playerMode)
    console.log("Playermode when toggling =======> " + !playerMode)
    playerMode ? pauseVideo() : playVideo();
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>

          <div className="background_Container_Video" >
            <video className="video" ref={getVideo} loop muted autoPlay={autoPlayer}>
              <source src={screen_Checker()} />
            </video>
          </div>

          {/** Navbar is placed here because it shoud be always on top of all elements in the page */}
          <NavPane />
          {showAccessibility ? (
            <Background ref={accessibilitySetting} onClick={closeAccessibilitySetting} >
              <Accessibility_Wrapper className="Wrapper_Accessibility" showAccessibility={showAccessibility}>
                <Accessibility_Window_Content>
                  <div color="primary" className='header'>

                    <Paper variant="stAccessibility" color="" className='modal_Header'>

                      <Typography color="secondary" variant='h5' >Tillgänglighetsjusteringar </Typography>
                      <button onClick={() => {
                        if (!playerMode) {
                          setPlayerMode_Text("AV");
                        } handleSwitch((baseTheme));

                      }} className='reset_Settings_Btn'>Återställ inställningar </button>
                    </Paper>
                    <div >
                      <h4 className='accessibility-Settings_Header'>Välj tillgänglighetsprofil</h4>
                    </div>

                    <label className='accessibility-active-profile'>aktiverad profil är<span className="accessibility-active-profile_text" >{localStorage.getItem("ActiveProfile")} </span></label>
                    <div className='accessibility_Setting_Btn_Container' >
                      <div className="btn-arrange">
                        <div className="btn">

                          <button ref={light} style={{ backgroundColor: localStorage.getItem("btnLight") }} onClick={() => {

                            {
                              light.current.style.backgroundColor = 'lightgreen';
                              dark.current.style.backgroundColor = 'white';
                              blind.current.style.backgroundColor = 'white';

                              // btnLight ? setBtnLight("green") : setBtnLight("white");
                              localStorage.setItem("btnLight", "lightgreen");
                              localStorage.setItem("btnBlind", "white");
                              localStorage.setItem("btnDark", "white");


                            } setBtnDark("white"); setBtnBlind("white");
                            setActiveProfile(" Ljus"); localStorage.setItem("ActiveProfile", " Ljus");
                            console.log("Setted " + localStorage.getItem("ActiveProfile")); handleSwitch((baseTheme));
                            localStorage.setItem("Theme", baseTheme);
                          }} className='accessibility_Setting_Btn'><LightModeIcon /></button>
                          <label>allmänt tema</label>

                        </div>


                        <div className="btn">
                          <button ref={dark} style={{ backgroundColor: localStorage.getItem("btnDark") }} onClick={() => {
                            {
                              light.current.style.backgroundColor = 'white';
                              dark.current.style.backgroundColor = 'lightgreen';
                              blind.current.style.backgroundColor = 'white';

                              localStorage.setItem("btnDark", "lightgreen");
                              localStorage.setItem("btnLight", "white");
                              localStorage.setItem("btnBlind", "white");

                            } setBtnLight("white"); setBtnBlind("white");
                            setActiveProfile(" Mörkt"); localStorage.setItem("ActiveProfile", " Mörkt");
                            console.log("Setted " + localStorage.getItem("ActiveProfile")); handleSwitch(theme1);
                          }} className='accessibility_Setting_Btn'><DarkModeIcon /></button>
                          <label>mörk kontrast</label>
                        </div>

                        <div className="btn">
                          <button ref={blind} style={{ backgroundColor: localStorage.getItem("btnBlind") }} onClick={() => {
                            {
                              light.current.style.backgroundColor = 'white';
                              dark.current.style.backgroundColor = 'white';
                              blind.current.style.backgroundColor = 'lightgreen';

                              localStorage.setItem("btnBlind", "lightgreen");
                              localStorage.setItem("btnLight", "white");
                              localStorage.setItem("btnDark", "white");
                            } setBtnLight("white"); setBtnDark("white");
                            setActiveProfile(" Synskadad"); localStorage.setItem("ActiveProfile", " Synskadad");
                            console.log("Setted " + localStorage.getItem("ActiveProfile")); handleSwitch(theme2);
                          }} variant='contained' className='accessibility_Setting_Btn'><CropFreeIcon /></button>
                          <label>kognitiva funktionshinder profil</label>
                        </div>

                        <div className="btn">
                          <button ref={blind} style={{ backgroundColor: localStorage.getItem("btnBlind") }} onClick={() => {
                            {
                              light.current.style.backgroundColor = 'white';
                              dark.current.style.backgroundColor = 'white';
                              blind.current.style.backgroundColor = 'lightgreen';

                              localStorage.setItem("btnBlind", "lightgreen");
                              localStorage.setItem("btnLight", "white");
                              localStorage.setItem("btnDark", "white");
                            } setBtnLight("white"); setBtnDark("white");
                            setActiveProfile(" Synskadad"); localStorage.setItem("ActiveProfile", " Synskadad");
                            console.log("Setted " + localStorage.getItem("ActiveProfile")); handleSwitch(theme2);
                          }} variant='contained' className='accessibility_Setting_Btn'>Kognitiv</button>
                          <label>Kognetive</label>
                        </div>

                        <div className="btn">
                          <button ref={backgroundAnimation} style={{ backgroundColor: localStorage.getItem("backgroundAnimation") }} disabled={btnDisable} onClick={() => { togglePlay() }} className='accessibility_Setting_Btn'>{localStorage.getItem("PlayerModeText")}</button>
                          <label disabled={btnDisable} >Animerad bakgrund</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accessibility_Window_Content>
                <CloseAccessibilitySettings aria-label='stäng tillgänglighetsinställningarna' onClick={() => setShowAccessibility(prev => !prev)} />
              </Accessibility_Wrapper>
            </Background>
          ) : null}
          <div className="accessibility_Icon"> <img onClick={() => openAccessibilitySettings()} src={require("./images/accessibility_Icon.png")} />   </div>
          <HelpOutlineIcon className="helpIcon" />
          <Routes>
            <Route path="/" element={<MVC_Home />} />
            <Route path="/Projects" element={<MVC_Projects />} />
            <Route path="/AboutUs" element={<MVC_AboutUs />} />
            <Route path="/Contacts" element={<MVC_Contacts />} />
          </Routes>
        </Router>
      </ThemeProvider >
    </>
  );
}

export default App;





