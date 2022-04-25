import React, { useState, useEffect } from "react";
import "../../App.css";
import MVC_Hero from "../MVC_Hero";
import Boxes from "./Boxes";
import Platform from "./Platform";

import AboutUs_Link from "./About_In_Home";

import Contacts_Link from "./Contacts_In_Home";
import MVC_Partners from "./MVC_Partners";
import NavPane from "../Nav_pane";

import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from '../../theme/GlobalStyles';
import { useTheme } from '../../theme/useTheme';

// 2: Create a cotainer
const Container = styled.div`
  margin: 5px auto 5px auto;
`;


/** The main page */
function MVC_Home() {


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
  const [newTheme, setNewTheme] = useState();


  return (
    <>
      {
        themeLoaded && <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>

            <MVC_Hero setter={setSelectedTheme} newTheme={newTheme} />

            <Platform />


            <Boxes />
            {/* Platform is placed in Hero */}
            <AboutUs_Link />

            <Contacts_Link />
            <MVC_Partners />
          </Container>
        </ThemeProvider>
      }
    </>

  );

}

export default MVC_Home;
