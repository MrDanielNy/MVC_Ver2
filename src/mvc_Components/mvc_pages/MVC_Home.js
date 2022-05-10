import React, { useState } from "react";
import "../../App.css";
import MVC_Hero from "../MVC_Hero";
import Boxes from "./Boxes";
import Platform from "./Platform";

import AboutUs_Link from "./About_In_Home";

import Contacts_Link from "./Contacts_In_Home";
import MVC_Partners from "./MVC_Partners";
import NavPane from "../Nav_pane";


import {
  Button,
  Paper,
  Typography,
  Box,
  ThemeProvider,
  createTheme
} from "@mui/material";


/** The main page */
function MVC_Home(props) {

  console.log("║----> " + props.Theme + " ║  ")
  return (
    <>

      <MVC_Hero Theme_={props.Theme} />

      <Platform />


      <Boxes />

      <AboutUs_Link />

      <Contacts_Link />

      <MVC_Partners />

    </>
  );
}

export default MVC_Home;
