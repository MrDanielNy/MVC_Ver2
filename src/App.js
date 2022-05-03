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

import {
  Button,
  Paper,
  Typography,
  Box,
  ThemeProvider,
  createTheme
} from "@mui/material";
import { Player } from "video-react";



function App(props) {

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
    <ThemeProvider theme={theme}>
      <Router>
        <div className="background_Container_Video" >
          <video ref={getVideo} loop muted autoPlay>
            <source src={video} />
          </video>

        </div>
        {/** Navbar is placed here because it shoud be always on top of all elements in the page */}
        <NavPane />
        <div className="accessibility_Container_Video">
          <Button onClick={() => handleSwitch(JSON.parse(theme1))} variant='contained' className='accessibility_Setting_Btn'>Dark</Button>
          <Button onClick={() => handleSwitch(theme2)} variant='contained' className='accessibility_Setting_Btn'>Blind</Button>
          <Button onClick={() => handleSwitch((baseTheme))} variant='contained' className='accessibility_Setting_Btn'>Blind</Button>
          {/*<Button onClick={() => { this.togglePlay.bind(this) }} variant='contained' className='accessibility_Setting_Btn'>Pausa video</Button>*/}
          <Button onClick={() => togglePlay()} variant='contained' className='accessibility_Setting_Btn'>
            {playerMode_text}
          </Button>
          <label>
            <input type="checkbox"
              defaultChecked={checked}
              onChange={() => togglePlay()}
            />
            Check Me!
          </label>

        </div>
        <Routes>
          <Route path="/" element={<MVC_Home />} />
          <Route path="/Projects" element={<MVC_Projects />} />
          <Route path="/AboutUs" element={<MVC_AboutUs />} />
          <Route path="/Contacts" element={<MVC_Contacts />} />
        </Routes>
      </Router>
    </ThemeProvider >
  );
}

export default App;





