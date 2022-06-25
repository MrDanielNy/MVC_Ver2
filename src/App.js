import "./App.css";
import NavPane from "./mvc_Components/Nav_pane";


import React, { useRef } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';
import { useHistory } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import MVC_Hero from "./mvc_Components/MVC_Hero";
import MVC_Home from "./mvc_Components/mvc_pages/MVC_Home";
import MVC_Projects from "./mvc_Components/mvc_pages/MVC_Projects";
import MVC_AboutUs from "./mvc_Components/mvc_pages/MVC_AboutUs";
import MVC_Contacts from "./mvc_Components/mvc_pages/MVC_Contacts";
import baseTheme from "./mvc_Components/mvc_pages/BaseTheme/Styles";
import { useState, useEffect, useCallback } from "react";
import { deepmerge } from "@mui/utils";
import { theme1, theme2, theme3 } from "./mvc_Components/mvc_pages/theme/AccessibilityThemes"
import video from "./images/video-2.mp4";
import image1 from "./images/HeroBlackWhite.png"
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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CropFreeIcon from '@mui/icons-material/CropFree';
import RestartAltSharpIcon from '@mui/icons-material/RestartAltSharp';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
import ContrastIcon from '@mui/icons-material/Contrast';
import { useNavigate } from 'react-router-dom';
import { CompressOutlined, SettingsApplications } from "@mui/icons-material";
import { isHostComponent } from "@mui/base";

/*
const Background = styled.div`
position:fixed;
display:flex;
align-items:center;
height:100%;
width:100%;

background-color:#c5c5c577;
z-index:4000;
`
const Accessibility_Wrapper = styled.div`
position: fixed;
width: 450px;
height: 600px;
box-shadow: 0 5px 16px rgb(3, 0, 51);
background: #c4bdbd;
display: flex;
flex-direction: row;
justify-content: center;

z-index: 2;
border-radius: 0px;
margin-bottom: 50px;
bottom: -10px;
left: 10px;

transition: all 2s ease-out;
`*/
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

position: absolute;
top: 10px;
left: 10px;
width: 32px;
height: 32px;
padding: 0;
z-index:2;
color: black;
background-color: white;
border-radius: 100px;
cursor: url(../public/HandCursor1.png), auto;


  `;



function App(props) {
  const navigate = useNavigate();
  window.onbeforeunload = () => true;



  const home = useCallback(e => {
    if (e.ctrlKey && e.altKey && e.code === 'KeyH') {
      navigate('/', { replace: true })
      console.log("H is pressed!")
    }
  }, [])
  useEffect(() => {
    document.addEventListener("keydown", home);
    return () => document.removeEventListener("keydown", home)
  })


  const contacts = useCallback(e => {
    if (e.ctrlKey && e.altKey && e.code === 'KeyC') {
      navigate('/Contacts', { replace: true })
      console.log("H is pressed!")
    }
  }, [])
  useEffect(() => {
    document.addEventListener("keydown", contacts);
    return () => document.removeEventListener("keydown", contacts)
  })

  const projects = useCallback(e => {
    if (e.ctrlKey && e.altKey && e.code === 'KeyP') {
      navigate('/Projects', { replace: true })
      console.log("H is pressed!")
    }
  }, [])
  useEffect(() => {
    document.addEventListener("keydown", projects);
    return () => document.removeEventListener("keydown", projects)
  })


  const aboutUs = useCallback(e => {
    if (e.ctrlKey && e.altKey && e.code === 'KeyA') {
      navigate('/AboutUs', { replace: true })
      console.log("H is pressed!")
    }
  }, [])
  useEffect(() => {
    document.addEventListener("keydown", aboutUs);
    return () => document.removeEventListener("keydown", aboutUs)
  })

  const accessibility = useCallback(e => {
    if (e.ctrlKey && e.altKey && e.code === 'KeyT') {
      openAccessibilitySettings();
    }
  }, [])
  useEffect(() => {
    document.addEventListener("keydown", accessibility);
    return () => document.removeEventListener("keydown", accessibility)
  })



  // Prevents refresh, user should know that some information won't be saved in local storage.
  const settings = useRef();
  const accessibilityIcon = useRef();
  const resetBtn = useRef();
  const light = useRef();
  const dark = useRef();
  const blind = useRef();
  const cognitive = useRef();
  const mainColorsRef = useRef();

  const normalRight = useRef();
  const normalLeft = useRef();
  const bigLeft = useRef();
  const bigRight = useRef();
  const backgroundAnimation = useRef();
  const textReader = useRef();
  const [colorsMode_Text, setColorsMode_Text] = useState(localStorage.getItem("ColorsModeText"));
  if (colorsMode_Text === null || colorsMode_Text === "") {
    setColorsMode_Text("PÅ");
    //backgroundAnimation.current.style.backgroundColor = "lightgreen";
    // localStorage.setItem("backgroundAnimation", "lightgreen");
    localStorage.setItem("ColorModeText", "PÅ");
  }
  const [bkColor, setBkcolor] = useState(true);
  const [btnLight, setBtnLight] = useState("white");
  const [btnDark, setBtnDark] = useState("white");
  const [btnBlind, setBtnBlind] = useState("white");
  const [btnCognitive, setBtnCognitive] = useState("white");
  const [btnBackGround, setBtnBackGround] = useState("white");
  const [theme, setTheme] = useState(baseTheme);
  const [activeProfile, setActiveProfile] = useState(localStorage.getItem("ActiveProfile"));

  const handleSwitch = (whichTheme) => {
    const newTheme = deepmerge(theme, whichTheme);
    setTheme(createTheme(newTheme));
  };

  const resetSettings = () => {
    light.current.style.backgroundColor = 'lightgreen';
    dark.current.style.backgroundColor = 'white';
    blind.current.style.backgroundColor = 'white';

    localStorage.setItem("btnBlind", "white");
    localStorage.setItem("btnCognitive", "white");
    localStorage.setItem("btnLight", "lightgreen");
    localStorage.setItem("btnDark", "white");
    localStorage.setItem("ActiveProfile", " Ljus");
    handleSwitch(baseTheme);


    setMousePointer('url(NormalPointer_ToLeft.png),auto');
    localStorage.setItem("cursor", 'url(NormalPointer_ToLeft.png),auto');

    console.log("Mouse pointer is >>>>>>>>>>> " + mousePointer)
    normalRight.current.style.backgroundColor = 'lightgreen';
    normalLeft.current.style.backgroundColor = 'white';
    bigLeft.current.style.backgroundColor = 'white';
    bigRight.current.style.backgroundColor = 'white';

    localStorage.setItem("normalRight", "lightgreen");
    localStorage.setItem("normalLeft", "white");
    localStorage.setItem("bigLeft", "white");
    localStorage.setItem("bigRight", "white");
    pauseReader();
    setPlayerMode(false);
    playVideo();
    normalColors();

  }
  let fullTeme = theme;
  if (activeProfile === null || activeProfile === "") {
    setActiveProfile(" Ljus");
    localStorage.setItem("btnLight", "lightgreen");
    fullTeme = baseTheme;
    localStorage.setItem("ActiveProfile", " Ljus")
  } else
    if (activeProfile === " Mörkt") {
      fullTeme = theme1;
    }
    else
      if (activeProfile === " Synskadad") {
        fullTeme = theme3;
      }

  React.useEffect(() => {
    handleSwitch(fullTeme);
  }, []);

  const accessibilitySetting = useRef();
  const [mousePointer, setMousePointer] = useState(localStorage.getItem("cursor"));
  const [showAccessibility, setShowAccessibility] = useState(false);
  console.log("[--- " + localStorage.getItem("cursor") + " ---]");

  const openAccessibilitySettings = () => {
    // let element_ = window.document.getElementsByClassName("Accessibility_Wrapper");
    //element_.click();


    accessibilityIcon.current.style.display = "none";
    setMousePointer(localStorage.getItem("cursor"));
    screen_Checker();
    /*if (localStorage.getItem("PlayerModeText") === "AV") {
      localStorage.setItem("backgroundAnimation", "lightgreen");
    }*/
    console.log("[When you click on acc. --- " + localStorage.getItem("cursor") + " ---]");
    if (localStorage.getItem("cursor") === null || localStorage.getItem("cursor") === "") {
      setMousePointer("url(NormalPointer_ToLeft.png),auto");
      //localStorage.setItem("cursor", "url(NormalPointer_ToLeft.png),auto");
    }
    if (localStorage.getItem("bigLeft") === null || localStorage.getItem("bigRight") === null ||
      localStorage.getItem("normalLeft") === null || localStorage.getItem("normalRight") === null) {
      localStorage.setItem("normalRight", "lightgreen");
    }
    setShowAccessibility(prev => !prev) // If it is true, change it to false
  }

  const closeAccessibilitySetting = e => {
    if (accessibilitySetting.current === e.target) {
      setShowAccessibility(false)
      accessibilityIcon.current.style.display = "block";
    }
  }
  // To close the accessibility windows using ESC key
  const escKey = useCallback(e => {
    if (e.key === "Escape" && showAccessibility) {
      accessibilityIcon.current.style.display = "block";
      console.log("Escape is pressed")
      setShowAccessibility(false);
    }
    else
      if (e.key === "Escape" && !showAccessibility) {
        setShowAccessibility(false)
        accessibilityIcon.current.style.display = "block";
      }
  }, [setShowAccessibility], [showAccessibility])
  useEffect(() => {
    document.addEventListener("keydown", escKey);
    return () => {
      document.removeEventListener("keydown", escKey)
      accessibilityIcon.current.style.display = "block";
    }
  })


  const getVideo = useRef(null);
  const [btnDisable, setBtnDisable] = useState(false)

  let mobileSize = false;

  const screen_Checker = () => {

    if (window.innerWidth > 768 && window.innerHeight > 450) {

      console.log("Not a mobile screen");
      mobileSize = false;
      return video;
    }
    else if (window.innerHeight < 450 || window.innerWidth <= 768) {
      console.log(window.innerHeight + " Mobile Screen")
      mobileSize = true;
      return "";
    }
  }
  console.log(mobileSize)
  React.useEffect(() => {
    setBtnDisable(mobileSize)
  }, []);

  const [playerMode_text, setPlayerMode_Text] = useState(localStorage.getItem("PlayerModeText"));
  if (playerMode_text === null || playerMode_text === "") {
    setPlayerMode_Text("PÅ");
    //backgroundAnimation.current.style.backgroundColor = "lightgreen";
    localStorage.setItem("backgroundAnimation", "lightgreen");
    localStorage.setItem("PlayerModeText", "PÅ");
  }
  let auto_Player = true;
  const [autoPlayer, setAutoPlayer] = useState("");
  const [playerMode, setPlayerMode] = useState(localStorage.getItem("PlayerMode"));
  const [quietProfile, setQuietProfile] = useState(localStorage.getItem("quietProfile"));
  const [mainColors, setMainColors] = useState(localStorage.getItem("colorsMode"));
  let colorState = true;
  console.log(mainColors + " mainColors in localstorage is -------------------------> " + typeof mainColors)
  if (mainColors === "true" || mainColors === true) {
    colorState = true;
  }
  else if (mainColors === "false" || mainColors === false) {
    colorState = false;
  }
  if (mainColors === null) {
    setMainColors(true);
    localStorage.setItem("colorsMode", true)
  }

  React.useEffect(() => {
    setMainColors(colorState);
    //localStorage.setItem("colorsMode", colorState);
  }, []);


  console.log(mainColors + " ¤¤¤¤¤¤¤¤¤¤¤")
  // localStorage.setItem("colorsMode", mainColors);
  console.log(colorState + " colorState in localstorage is -------------------------> " + typeof colorState)
  console.log(mainColors + " " + typeof localStorage.getItem("colorsMode"))
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
    setPlayerMode_Text("AV")

    backgroundAnimation.current.style.backgroundColor = "lightgreen";
    localStorage.setItem("backgroundAnimation", "lightgreen")
    localStorage.setItem("PlayerModeText", "PÅ");
    localStorage.setItem("PlayerMode", true);
  };

  const pauseVideo = () => {
    getVideo.current.pause();
    setPlayerMode(false)
    setPlayerMode_Text("PÅ");
    localStorage.setItem("PlayerModeText", "AV");
    backgroundAnimation.current.style.backgroundColor = "white";
    localStorage.setItem("backgroundAnimation", "white")

    localStorage.setItem("PlayerMode", false);

  };

  const togglePlay = () => {
    localStorage.setItem("PlayerMode", !playerMode)
    playerMode ? pauseVideo() : playVideo();
  };


  if (colorsMode_Text === null || colorsMode_Text === "") {
    setColorsMode_Text("PÅ");
    localStorage.setItem("ColorsModeText", "PÅ");
  }


  const toggleColors = () => {
    localStorage.setItem("colorsMode", !mainColors);

    mainColors ? reducedColors() : normalColors();

  }


  const normalColors = () => {

    setMainColors(true);

    setColorsMode_Text("AV")
    mainColorsRef.current.style.backgroundColor = "white";
    localStorage.setItem("mainColors", "white")
    console.log("Normal")
    localStorage.setItem("ColorsModeText", "AV");
    localStorage.setItem("colorsMode", true);
  };

  const reducedColors = () => {



    setMainColors(false);
    setColorsMode_Text("PÅ")
    mainColorsRef.current.style.backgroundColor = "lightgreen";
    localStorage.setItem("mainColors", "lightgreen")
    console.log("Reduced colors")
    localStorage.setItem("ColorsModeText", "PÅ");
    localStorage.setItem("colorsMode", false);
  };


  const [readerMode, setReaderMode] = useState(localStorage.getItem("textReaderStatus"));
  localStorage.setItem("textReaderStatus", readerMode);
  //textReader.current.style.backgroundColor = localStorage.getItem("textReaderColor");
  var synth = window.speechSynthesis;
  const { speak } = useSpeechSynthesis();
  let globalTextReader_Status = false;

  //console.log(localStorage.getItem("textReaderStatus") + "<--------------------")
  const toggleReaderStatus = () => {
    setBkcolor(!bkColor);
    console.log("Reader mode is ---> " + readerMode);
    setReaderMode(!readerMode);
    console.log("Reader mode is ---> " + readerMode);
    localStorage.setItem("textReaderStatus", readerMode)
    console.log(localStorage.getItem("textReaderStatus") + "<--------------------")
    // console.log("Playermode when toggling =======> " + !readerMode)
    readerMode ? pauseReader() : playReader();
  };

  const playReader = () => {
    textReader.current.style.backgroundColor = "lightgreen";
    localStorage.setItem("textReaderColor", "lightgreen");
    synth.resume();
    setReaderMode(true);

  };

  const pauseReader = () => {
    synth.pause();
    textReader.current.style.backgroundColor = "white";
    localStorage.setItem("textReaderColor", "white");
    globalTextReader_Status = false;
    setReaderMode(false)

  };

  function text_Reader(input_Text, e) {
    synth.resume();
    if (localStorage.getItem("textReaderStatus") === "true") {
      e.target.style.border = '2px solid yellow';
    }
    speak({
      text: input_Text, name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: true, "default": true
    }
    )
  }
  let player_Mode;
  if (localStorage.getItem("PlayerMode") === "true") {

    player_Mode = true;
  }
  else
    player_Mode = false;

  let blind_profile;
  if (localStorage.getItem("btnBlind") === "lightgreen") {
    blind_profile = true;
  }
  else
    blind_profile = false;

  let bright_profile;
  if (localStorage.getItem("ActiveProfile") === " Ljus") {
    bright_profile = true;
  }
  else
    bright_profile = false;
  let bk_Btn_txt = ""
  if (localStorage.getItem("playerMode") === "true") {
    bk_Btn_txt = true;
  }
  else {
    bk_Btn_txt = false;
  }

  let colorsMode_;
  if (localStorage.getItem("colorsMode") === "true") {
    colorsMode_ = true;
  }
  else
    colorsMode_ = false;

  /* const getPosition = () => {
 
     accessibilityIcon.current.offsetTop = 200;
     const x = accessibilityIcon.current.offsetLeft;
     console.log("X ----> " + x);
 
     const y = accessibilityIcon.current.offsetTop;
     console.log("X ----> " + y);
   };
 
   // Get the position of the red box in the beginning
   useEffect(() => {
     getPosition();
   }, []);*/
  return (
    < div  >
      <ThemeProvider theme={theme}>

        <div className="background_Container_Video" >
          <video className={mainColors ? "video" : "noVideo"} ref={getVideo} loop muted autoPlay={autoPlayer} >
            <source src={screen_Checker()} />
          </video>
        </div>

        {/** Navbar is placed here because it should be always on the top of all the elements in the page   aria-hidden="true"*/}


        <NavPane />
        <Paper aria-label="navigeringsfältet" variant="navbar" color="primary" className="accessibility_Icon_Container " onMouseLeave={(e) => {

          e.target.style.border = 'none';
          // synth.pause();
          synth.cancel();
        }}
          onMouseEnter={(e) => {
            text_Reader("Tillgänglighets inställningar", e);

          }} >
          <div></div>

          <div>

          </div>

          <div className="accessibility_Img">
            <button tabIndex={-1}>
              <img ref={accessibilityIcon} tabIndex={0}



                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    //openAccessibilitySettings();
                  }
                }}
                onClick={() => {

                  //openAccessibilitySettings();
                }} src={require("./images/Help_1.png")} className="accessibility_Help" />
            </button>

            <button tabIndex={-1}>
              <img ref={accessibilityIcon} tabIndex={0}



                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    openAccessibilitySettings();
                  }
                }}
                onClick={() => {

                  openAccessibilitySettings();
                }} src={require("./images/accessibility_2.png")} className="accessibility_Img" />
            </button>
            <div></div>
          </div>

        </Paper>



        {showAccessibility ? (
          <div className="Background" ref={accessibilitySetting} onClick={closeAccessibilitySetting} >
            <div ref={settings} id="accessibility" tabIndex={2} className="Accessibility_Wrapper" showAccessibility={showAccessibility}>
              <Accessibility_Window_Content className="Accessibility_Window_Content">
                <div color="primary" className='header'>

                  <div variant="stAccessibility" color="" className='modal_Header'>

                    <Typography color="secondary" variant='h5' >Tillgänglighetsinställningar </Typography>
                    <button id="btnReset" ref={resetBtn}
                      onClick={() => {
                        if (!playerMode) {
                          setPlayerMode_Text("AV");
                          setActiveProfile(" Ljus");

                        } resetSettings();
                      }} className='reset_Settings_Btn'>Återställ </button>
                  </div>

                  <div >
                    <h4 className='accessibility-Settings_Header'>Välj tillgänglighetsprofil</h4>
                  </div>
                  <label className='accessibility-active-profile'>aktiverad profil är<span className="accessibility-active-profile_text" >{localStorage.getItem("ActiveProfile")} </span></label>
                  <div variant="btnContainer" className='accessibility_Setting_Btn_Container' >
                    <div className="btn-arrange">

                      <div id="bk_Animation_Btn" className="btn">
                        <button ref={backgroundAnimation} style={{ backgroundColor: localStorage.getItem("backgroundAnimation") }} disabled={btnDisable}
                          onClick={() => { console.log(playerMode + " Mode......" + typeof playerMode); togglePlay() }} className='accessibility_Setting_Btn'>{

                            playerMode ? "AV" : "PÅ"
                          }</button>
                        <label disabled={btnDisable} >Animerad bakground
                          <br /></label>
                      </div>


                      <div className="btn">
                        <button id="btnReset" ref={mainColorsRef} style={{ backgroundColor: localStorage.getItem("mainColors") }}
                          onClick={() => {
                            toggleColors();
                            // localStorage.setItem("colorsMode", mainColors)
                          }} className='accessibility_Setting_Btn'>{localStorage.getItem("ColorsModeText")}</button>
                        <label disabled={btnDisable} >Mindre färg och blixtar <br /></label>
                      </div>
                      <span className={!mainColors ? "btnDescription" : "noDescription"}>Eliminera risken för anfall och hysteri genom att rensa blixtar och minska färger</span>

                      <div className="btn">
                        <button ref={light} style={{ backgroundColor: localStorage.getItem("btnLight") }} onClick={() => {
                          {
                            light.current.style.backgroundColor = 'lightgreen';
                            dark.current.style.backgroundColor = 'white';
                            blind.current.style.backgroundColor = 'white';

                            localStorage.setItem("btnCognitive", "white");
                            localStorage.setItem("btnLight", "lightgreen");
                            localStorage.setItem("btnBlind", "white");
                            localStorage.setItem("btnDark", "white");
                          }
                          setBtnDark("white");
                          setBtnBlind("white");
                          setBtnCognitive("white");
                          setActiveProfile(" Ljus");
                          localStorage.setItem("ActiveProfile", " Ljus");
                          handleSwitch((baseTheme));
                          localStorage.setItem("Theme", baseTheme);
                        }} className='accessibility_Setting_Btn'><LightModeIcon /></button>
                        <label>Ljus</label>

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
                            localStorage.setItem("btnCognitive", "white");

                          }
                          setBtnLight("white");
                          setBtnBlind("white");
                          setBtnCognitive("white");
                          setActiveProfile(" Mörkt");
                          localStorage.setItem("ActiveProfile", " Mörkt");
                          handleSwitch(theme1);
                        }} className='accessibility_Setting_Btn'><DarkModeIcon /></button>
                        <label>mörk</label>
                      </div>

                      <div className="btn">
                        <button ref={blind} style={{ backgroundColor: localStorage.getItem("btnBlind") }} onClick={() => {
                          {
                            light.current.style.backgroundColor = 'white';
                            dark.current.style.backgroundColor = 'white';
                            blind.current.style.backgroundColor = 'lightgreen';

                            localStorage.setItem("btnBlind", "lightgreen");
                            localStorage.setItem("btnCognitive", "white");
                            localStorage.setItem("btnLight", "white");
                            localStorage.setItem("btnDark", "white");
                          }
                          setBtnLight("white");
                          setBtnDark("white");
                          setBtnCognitive("white");
                          setActiveProfile(" Synskadad");
                          localStorage.setItem("ActiveProfile", " Synskadad");
                          handleSwitch(theme3);
                        }} variant='contained' className='accessibility_Setting_Btn'><VisibilityIcon /></button>
                        <label>Synskadad profil</label>
                      </div>
                      <span className={blind_profile ? "btnDescription" : "noDescription"}>Tillgänglig för de flesta synnedsättningar som försämrande syn, tunnelseende, grå starr, glaukom och andra</span>
                      {/* <div className="btn">
                        <button ref={cognitive} style={{ backgroundColor: localStorage.getItem("btnCognitive") }} onClick={() => {
                          {
                            localStorage.setItem("btnCognitive", "lightgreen");
                            localStorage.setItem("ActiveProfile", " kognitive");
                          }
                          setBtnLight("white");
                          setBtnDark("white");
                          setBtnBlind("white");
                          setBtnCognitive("lightgreen");
                          setActiveProfile(" kognitive")

                          //localStorage.setItem("ActiveProfile", " kognitive");
                          handleSwitch(theme2);

                        }} variant='contained' className='accessibility_Setting_Btn'><CropFreeIcon /></button>
                        <label>kognitiva funktionshinder profil</label>
                      </div>*/}

                      {/** Cussor settings */}

                      <div className="cursoricons">
                        <label >Markörinställningar </label>
                      </div>

                      <div className="btn_Pointer">
                        <button disabled={btnDisable} ref={normalRight} style={{ backgroundColor: localStorage.getItem("normalRight") }} onClick={() => {
                          {
                            setMousePointer('url(NormalPointer_ToLeft.png),auto');
                            localStorage.setItem("cursor", 'url(NormalPointer_ToLeft.png),auto');

                            console.log("Mouse pointer is >>>>>>>>>>> " + mousePointer)
                            normalRight.current.style.backgroundColor = 'lightgreen';
                            normalLeft.current.style.backgroundColor = 'white';
                            bigLeft.current.style.backgroundColor = 'white';
                            bigRight.current.style.backgroundColor = 'white';

                            localStorage.setItem("normalRight", "lightgreen");
                            localStorage.setItem("normalLeft", "white");
                            localStorage.setItem("bigLeft", "white");
                            localStorage.setItem("bigRight", "white");
                          }
                        }} variant='contained' className='accessibility_Setting_Btn'><img src="NormalPointer_ToLeft.png" alt="liten storlek höger muspekare" /></button>
                        <label>Normal storlek höger</label>
                      </div>

                      <div className="btn_Pointer">
                        <button disabled={btnDisable} ref={normalLeft} style={{ backgroundColor: localStorage.getItem("normalLeft") }} onClick={() => {
                          {
                            setMousePointer('url(normalSizePointer_right.png),auto');
                            localStorage.setItem("cursor", 'url(normalSizePointer_right.png),auto');

                            console.log("Mouse pointer is >>>>>>>>>>> " + mousePointer + " " + typeof mousePointer)
                            normalRight.current.style.backgroundColor = 'white';
                            normalLeft.current.style.backgroundColor = 'lightgreen';
                            bigLeft.current.style.backgroundColor = 'white';
                            bigRight.current.style.backgroundColor = 'white';

                            localStorage.setItem("normalRight", "white");
                            localStorage.setItem("normalLeft", "lightgreen");
                            localStorage.setItem("bigLeft", "white");
                            localStorage.setItem("bigRight", "white");

                          }
                        }} variant='contained' className='accessibility_Setting_Btn'><img src="normalSizePointer_right.png" alt="liten storlek vänster muspekare" /></button>
                        <label>Normal storlek vänster</label>
                      </div>



                      <div className="btn_Pointer">
                        <button disabled={btnDisable} ref={bigRight} style={{ backgroundColor: localStorage.getItem("bigRight") }} onClick={() => {
                          {

                            setMousePointer('url(toLeftmousePointer.png),auto');
                            localStorage.setItem("cursor", 'url(toLeftmousePointer.png),auto');
                            normalRight.current.style.backgroundColor = 'white';
                            normalLeft.current.style.backgroundColor = 'white';
                            bigLeft.current.style.backgroundColor = 'white';
                            bigRight.current.style.backgroundColor = 'lightgreen';

                            localStorage.setItem("normalRight", "white");
                            localStorage.setItem("normalLeft", "white");
                            localStorage.setItem("bigLeft", "white");
                            localStorage.setItem("bigRight", "lightgreen");


                          }


                        }} variant='contained' className='accessibility_Setting_Btn'><img src="toLeft_cursorIcon.png" alt="stor storlek höger muspekare" /></button>
                        <label>Höger hand</label>
                      </div>

                      <div className="btn_Pointer">
                        <button disabled={btnDisable} ref={bigLeft} style={{ backgroundColor: localStorage.getItem("bigLeft") }} onClick={() => {
                          {
                            // It sets the pointer's url.
                            setMousePointer('url(toRightMousePointer.png),auto');
                            // It saves the address of the mouse pointer image in local storage
                            localStorage.setItem("cursor", 'url(toRightMousePointer.png),auto');

                            // Changing the buttons' background color
                            normalRight.current.style.backgroundColor = 'white';
                            normalLeft.current.style.backgroundColor = 'white';
                            bigLeft.current.style.backgroundColor = 'lightgreen';
                            bigRight.current.style.backgroundColor = 'white';

                            // Saving the buttons' background color in local storage
                            localStorage.setItem("normalRight", "white");
                            localStorage.setItem("normalLeft", "white");
                            localStorage.setItem("bigLeft", "lightgreen");
                            localStorage.setItem("bigRight", "white");
                          }

                        }} variant='contained' className='accessibility_Setting_Btn'><img src="toRight_CursorIcon.png" alt="stor storlek vänster muspekare" />
                        </button>
                        <label>Vänster hand</label>
                      </div>

                      <div className="ContentReader">
                        <label >Innehållsläsare </label>
                      </div>
                      <div className="btn">
                        <button ref={textReader} style={{ backgroundColor: localStorage.getItem("textReaderColor") }} onClick={() => { toggleReaderStatus() }}
                          className='accessibility_Setting_Btn'>
                          <img src="txtreader1.png" />
                        </button>
                        <label >PÅ | AV</label>
                      </div>
                    </div>
                  </div>
                </div>
              </Accessibility_Window_Content>
              <CloseAccessibilitySettings className="closeIcon" aria-label='stäng tillgänglighetsinställningarna' onClick={() => setShowAccessibility(prev => !prev)} />
            </div>
          </div>
        ) : null}


        <div className={colorsMode_ ? "App" : "safeApp"} style={{ cursor: mousePointer }} >
          <Routes>
            <Route path="/" element={<MVC_Home />} />
            <Route path="/Projects" element={<MVC_Projects />} />
            <Route path="/AboutUs" element={<MVC_AboutUs />} />
            <Route path="/Contacts" element={<MVC_Contacts />} />
          </Routes>
        </div>



      </ThemeProvider >
    </div >
  );
}

export default App;





