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



const Background = styled.div`
   position: fixed;
    display: flex;
    align-items:center;
    height:100%;
    width:100%;
    left:10px
    border-radius: 10px;
    background-color:#252515a9;
    z-index:9999;
    curser:pointer;
    
    
`
const Accessibility_Wrapper = styled.div`
 position: fixed;
width:450px;
height:600px;
box-shadow: 0 5px 16px rgba(0,0,0,.4);
background:#c4bdbd;
display:flex;
flex-direction:row;
justify-content:center;

z-index:2;
border-radius:20px;
margin-bottom:50px;
bottom:-10px;
left:10px;
border-radius:2px green solid;
transition: all 2s ease-out;
`
const Accessibility_Window_Content = styled.div`
 position: fixed;
display:flex;
flex-direction:column;
line-height:1.8;
color:black;
left:80px
 position: absolute;

`



const CloseAccessibilitySettings = styled(MdClose)`
cursor:pointer;
position:absolute;
top:10px;
left:10px;
width:32px;
height:32px;
padding:0;
z-index=2;
color:black;
background-color:white;
border-radius:100px
`;


function App(props) {
  const [activeProfile, setActiveProfile] = useState(" Ljus");
  const accessibilitySetting = useRef();
  const closeAccessibilitySetting = e => {
    console.log(" closed --------------------")
    if (accessibilitySetting.current === e.target) {
      setShowAccessibility(false)

    }
  }

  const [showAccessibility, setShowAccessibility] = useState(false);
  const openAccessibilitySettings = () => {
    console.log("Clicked on the icon ")
    setShowAccessibility(prev => !prev) // If it is true, change it to false
  }

  const [checked, setChecked] = React.useState(true);


  const getVideo = useRef(null);
  const [playerState, setPlayerState] = useState(
    true
  );
  /* Video
  const togglePlay = () => {
    this.refs.vidRef.play();
    setPlayerState(
      !playerState
 
    );
  };

  useEffect(() => {
    playerState
      ? this.refs.vidRef.play()
      : this.refs.vidRef.pause();
  }, [playerState.isPlaying, vidRef]);

*/
  const [playerMode_text, setPlayerMode_Text] = useState("AV")
  const [playerMode, setPlayerMode] = useState(true);
  console.log("Playermode is ::::::::> " + playerMode)
  const playVideo = () => {
    console.log("()=<")
    getVideo.current.play()
    setPlayerMode_Text("AV");
  };

  const pauseVideo = () => {
    getVideo.current.pause();
    setPlayerMode_Text("PÅ");
  };

  const togglePlay = () => {
    setPlayerMode(!playerMode)
    setChecked(!checked)
    console.log("Playermode when toggling =======> " + playerMode)
    playerMode ? pauseVideo() : playVideo()

  };


  const [theme, setTheme] = useState(baseTheme);
  const handleSwitch = (whichTheme) => {
    const newTheme = deepmerge(theme, whichTheme);
    setTheme(createTheme(newTheme));
    console.log("The theme in app is .....>>" + theme)
  };

  // const [backgrond, setBackground] = useState("../images/video-1.mp4");

  /*function Change_BackgroundState() {
 
    if (backgrond === "../images/video-1.mp4") {
      setBackground("")
      localStorage.setItem("Background", backgrond)
    }
    else {
      setBackground("../images/video-1.mp4")
      localStorage.setItem("Background", backgrond)
    }
  }
 
 
 
  console.log("Before saving in storage " + backgrond);
  localStorage.setItem("Background", backgrond)*/


  return (
    <>

      <ThemeProvider theme={theme}>
        <Router>
          <div className="background_Container_Video" >
            <video className="video" ref={getVideo} loop muted autoPlay>
              <source src={video} />
            </video>

          </div>
          {/** Navbar is placed here because it shoud be always on top of all elements in the page */}
          <NavPane />


          {showAccessibility ? (

            <Background ref={accessibilitySetting} onClick={closeAccessibilitySetting} >
              <Accessibility_Wrapper className="Wrapper_Accessibility" showAccessibility={showAccessibility}>

                <Accessibility_Window_Content>

                  <div color="primary" className='header'>

                    <Paper color="" className='modal_Header'>
                      <Typography color="secondary" variant='h5' >Tillgänglighetsjusteringar </Typography>
                      <button onClick={() => {
                        if (!playerMode) {
                          togglePlay()

                          setPlayerMode_Text("AV");
                        } handleSwitch((baseTheme))
                      }} className='reset_Settings_Btn'>Återställ inställningar</button>

                    </Paper>


                    <div >
                      <h4 className='accessibility-Settings_Header'>Välj tillgänglighetsprofil</h4>
                    </div>

                    <label className='accessibility-active-profile'>aktiverad profil är<span className="accessibility-active-profile_text" >{activeProfile} </span></label>
                    <div className='accessibility_Setting_Btn_Container' >

                      <label>Ljus</label>
                      <button onClick={() => { setActiveProfile(" Ljus"); handleSwitch((baseTheme)) }} variant='contained' className='accessibility_Setting_Btn'>Ljus</button>
                      <label>Ljus</label>
                      <button onClick={() => { setActiveProfile(" Mörkt"); handleSwitch(JSON.parse(theme1)) }} className='accessibility_Setting_Btn'>Dark</button>
                      <label>Ljus</label>
                      <button onClick={() => { setActiveProfile(" Synskadad"); handleSwitch(theme2) }} variant='contained' className='accessibility_Setting_Btn'>Blind</button>
                      <label>Ljus</label>
                      <button onClick={() => togglePlay()} className='accessibility_Setting_Btn'>{playerMode_text}</button>

                    </div>
                  </div>

                </Accessibility_Window_Content>
                <CloseAccessibilitySettings aria-label='stäng tillgänglighetsinställningarna' onClick={() => setShowAccessibility(prev => !prev)} />

              </Accessibility_Wrapper>
            </Background>



          ) : null}

          <div className="accessibility_Icon"> <img onClick={openAccessibilitySettings} src={require("./images/accessibility_Icon.png")} /></div>

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





