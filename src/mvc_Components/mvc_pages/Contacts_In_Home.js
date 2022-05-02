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
          <Typography sx={{ fontSize: 60 }} color="primary">Välkomna att kontakta oss! </Typography>
          <h6 className="subTitle">
            Vi söker hela tiden efter nya utmaningar, samarbeten och dialoger.
          </h6>
        </div>

        <div>
          <Link to="/Contacts" className="btn_Contact">
            <Button color="secondary" variant="contained" className="btn_Contact">
              <Typography color="primary" variant="h6">
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
