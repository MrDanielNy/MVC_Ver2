import React, { useRef } from "react";
import Contacts_Link from "./Contacts_In_Home";
import "./MVC_Projects.css"
import ProjectMagicalMan from "./Project_Magical_Man";
import MVC_Contacts from "../mvc_pages/MVC_Contacts"

import {
  Button,
  Paper,
  Typography,
  Box,
  ThemeProvider,
  createTheme
} from "@mui/material";

const MVC_Projects = (props) => {

  const handleKeyDown = (event) => {

    if (event.keyCode == 27) {
      this.MVC_Contacts();

    }

  };


  React.useEffect(() => {

    window.addEventListener('keydown', handleKeyDown);


    // cleanup this component

    return () => {

      window.removeEventListener('keydown', handleKeyDown);

    };

  }, []);


  const headerFocus = useRef();

  React.useEffect(() => {
    headerFocus.current.focus();
  }, []);

  return (
    <>
      <div className="project_Container">
        <Typography ref={headerFocus} tabIndex={11} sx={{
          fontSize: {
            lg: 100,
            md: 70,
            sm: 50,
            xs: 30,
          }
        }} className="project_Title">Våra projekt</Typography>

        <div className="project_One_Container">

          <Paper variant="st3" className="project_One">
            <Typography tabIndex={13} variant="h3" className="project_One_Title">
              Träslöjd i VR
            </Typography>

            <Typography tabIndex={14} sx={{
              fontSize: {
                lg: 23,
                md: 20,
                sm: 18,
                xs: 15,
              }
            }} variant="h3_Boxes" className="project_One_Text">“My Virtual Classroom utvecklar just nu en digital träslöjd i en virtuell värld för elever med funktionsnedsättningar i skolan. Vårt mål är att öka elevernas egna förutsättningar och skapa en mer jämlik lektion, oavsett funktionsvariation. Detta verktyg öppnar upp nya möjligheter för skolan att kunna undervisa träslöjd för fler elever på nya sätt.”
              Se vår film om vår vän Alex.
            </Typography>
          </Paper>
          <div >
            <img tabIndex={12} className="project_One_Image" src={require("../../images/Project.png")} />
          </div>

        </div>


        <div className="project_Two_Container">
          <Paper variant="st3" className="project_Two">
            <Typography tabIndex={16} variant="h3" className="project_Two_Title">
              Hangaren
            </Typography>
            <Typography tabIndex={17} sx={{
              fontSize: {
                lg: 23,
                md: 20,
                sm: 18,
                xs: 15,
              }
            }} variant="h3_Boxes" className="project_Two_Text">Som ett steg i att visa hur olika delar som Kultur och Teknik kan bli ett fantastiskt projekt så har vi skapat miljö i VR och film i Hangaren, Linköping.  Se resultatet här
            </Typography>
          </Paper>
          <div >
            <img tabIndex={15} className="project_Two_Image" src={require("../../images/Project.png")} />
          </div>
        </div>
      </div>
      <Contacts_Link />
    </>
  )
};

export default MVC_Projects;
