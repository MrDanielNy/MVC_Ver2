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
      <Paper variant="st1" className="about">
        <div className="about_Container">
          <div className="about_Text">
            <div className="about_Header">
              <Typography sx={{
                fontSize: {
                  lg: 100,
                  md: 70,
                  sm: 50,
                  xs: 30,
                }
              }} variant="h1" color="secondary" >Om oss</Typography>
            </div>
            <div className="about_SubText">
              <Typography variant="h3" sx={{
                fontSize: {
                  lg: 23,
                  md: 20,
                  sm: 18,
                  xs: 15,
                }
              }} color="secondary" >
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
                <Typography variant="h6">Om oss</Typography> </Button>
            </Link>
          </div>
          <div></div>
        </div>
      </Paper>
    </>
  );
}
export default AboutUs_Link;
