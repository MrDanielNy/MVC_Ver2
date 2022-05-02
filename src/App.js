import "./App.css";
import NavPane from "./mvc_Components/Nav_pane";
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
import { useState } from "react";
import { deepmerge } from "@mui/utils";
import { theme1, theme2 } from "./mvc_Components/mvc_pages/theme/AccessibilityThemes"


import {
  Button,
  Paper,
  Typography,
  Box,
  ThemeProvider,
  createTheme
} from "@mui/material";

function App() {

  const [theme, setTheme] = useState(baseTheme);
  const handleSwitch = (whichTheme) => {
    const newTheme = deepmerge(theme, whichTheme);
    setTheme(createTheme(newTheme));
    console.log("The theme in app is .....>>" + theme)
  };

  const [backgrond, setBackground] = useState("../images/video-1.mp4");

  function Change_BackgroundState() {

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
  localStorage.setItem("Background", backgrond)


  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/** Navbar is placed here because it shoud be always on top of all elements in the page */}
        <NavPane />
        <div className="accessibility_Container">
          <Button onClick={() => handleSwitch(JSON.parse(theme1))} variant='contained' className='accessibility_Setting_Btn'>Dark</Button>
          <Button onClick={() => handleSwitch(theme2)} variant='contained' className='accessibility_Setting_Btn'>Blind</Button>
          <Button onClick={() => handleSwitch((baseTheme))} variant='contained' className='accessibility_Setting_Btn'>Blind</Button>
          <Button onClick={() => Change_BackgroundState()} variant='contained' className='accessibility_Setting_Btn'>Pausa video</Button>
        </div>
        <Routes>
          <Route path="/" element={<MVC_Home bkg={backgrond} />} />
          <Route path="/Projects" element={<MVC_Projects />} />
          <Route path="/AboutUs" element={<MVC_AboutUs />} />
          <Route path="/Contacts" element={<MVC_Contacts />} />
        </Routes>
      </Router>
    </ThemeProvider >
  );
}

export default App;
