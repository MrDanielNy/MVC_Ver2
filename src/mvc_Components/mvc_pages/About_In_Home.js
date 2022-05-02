import React from "react";
import "../mvc_pages/About_In_Home.css";
import { Link } from "react-router-dom";

import {
  Button,
  Paper,
  Typography,
  Box,
  ThemeProvider,
  createTheme
} from "@mui/material";
function AboutUs_Link() {
  return (
    <>
      <Paper className="about">
        <div className="about_Container">
          <div className="about_Text">
            <div className="about_Header">
              <Typography variant="h3" color="secondary" >My Virtual Classroom</Typography>
            </div>
            <div className="about_SubText">
              <Typography sx={{ typography: { sm: 'body1', xs: 'body2' } }} variant="h6" color="secondary" >
                Vi är ett företag med stor passion för teknisk utveckling och utbildning. Vi tycker att kombinationen är spännande och hoppas att ni vara med på vår resa.
              </Typography>
            </div>
          </div>

          <div className="about_Img">
            <img
              src={require("../../images/Kopia-av-My_Virtual_Classroom_-Daniel2020-11-06_12-51-03.png")}
              alt="Two men! Daniel Johansson and Daniel Ny."
              className="about_Img "
            />
          </div>
        </div>
        <div className="btn_Container">
          <div></div>
          <div>
            <Link to="/AboutUs" className="about_btn_Link">
              <Button color="secondary" variant="contained" className="about_Btn_Page">
                <Typography color="primary" variant="h6">Om oss</Typography> </Button>
            </Link>
          </div>
          <div></div>
        </div>
      </Paper>
    </>
  );
}
export default AboutUs_Link;
