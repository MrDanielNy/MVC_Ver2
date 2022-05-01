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
      <Paper color="primary" className="about">
        <div className="about_Container">
          <div className="about_Text">
            <Typography variant="h3" color="secondary">My Virtual Classroom</Typography>
            <Typography variant="h6" color="secondary" className="about_SubText">
              sadasdasdasd asd asd asda sadasdasdasd asd asd asdasdasd as ad
              asdasd asd asd asdasd
            </Typography>
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
            <Link to="/AboutUs">
              <Button variant="contained" className="about_Btn_Page">About Us</Button>
            </Link>
          </div>
          <div></div>
        </div>
      </Paper>
    </>
  );
}
export default AboutUs_Link;
