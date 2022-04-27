import React, { useState } from "react";
import "../../App.css";
import MVC_Hero from "../MVC_Hero";
import Boxes from "./Boxes";
import Platform from "./Platform";

import AboutUs_Link from "./About_In_Home";

import Contacts_Link from "./Contacts_In_Home";
import MVC_Partners from "./MVC_Partners";
import NavPane from "../Nav_pane";
import { ThemeContext } from 'styled-components';


/** The main page */
function MVC_Home() {
  const [theme, toggleTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      <MVC_Hero />
      <Platform />

      <Boxes />
      {/* Platform is placed in Hero */}
      <AboutUs_Link />

      <Contacts_Link />
      <MVC_Partners />
    </ThemeContext.Provider>
  );
}

export default MVC_Home;
