import React from "react";
import "./Contacts_In_Home.css";
import "./MVC_Contacts_Footer"
import { Link } from "react-router-dom";

import {
  Button,
  Paper,
  Typography,
  Box,
  ThemeProvider,
  createTheme
} from "@mui/material";

function Contacts_Link() {
  return (
    <div className="main_Container">
      <div className="contacts_Container">

        <div className="contacts_Title">
          <Typography variant="h1" sx={{
            fontSize: {
              lg: 100,
              md: 70,
              sm: 50,
              xs: 30,
            }
          }} color="primary">Välkomna att kontakta oss! </Typography>
          <Typography variant="h3" sx={{
            fontSize: {
              lg: 23,
              md: 20,
              sm: 18,
              xs: 15,
            }
          }} className="subTitle">
            Vi söker hela tiden efter nya utmaningar, samarbeten och dialoger.
          </Typography>
        </div>

        <div>
          <Link to="/Contacts" className="about_btn_Link">
            <Button color="secondary" variant="contained" className="btn_Contact">
              <Typography color="primary" variant="contained">
                Kontakta oss </Typography>
            </Button>
          </Link>
        </div>
        {/** TODO: Make a link to MVC's social media */}

        <div className="social_Links_Container_">
          <div className="facebook">
            <img
              src={require("../../images/facebook.png")}
              alt=" A link to my virtual classroom's Facebook "
            />
          </div>
          <div className="linkedIn">
            <img
              src={require("../../images/linkedIn.png")}
              alt=" A link to my virtual classroom's LinkedIn "
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contacts_Link;
