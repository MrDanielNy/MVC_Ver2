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
import { useSpeechSynthesis } from 'react-speech-kit';


function AboutUs_Link() {

  var synth = window.speechSynthesis;
  const { speak } = useSpeechSynthesis();
  if (localStorage.getItem("textReaderStatus") === "true") {
    synth.resume();
  }
  else {
    synth.cancel();
  }
  function text_Reader(input_Text, e) {
    synth.resume();
    e.target.style.border = '4px solid lightgreen';
    speak({
      text: input_Text, name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: true, "default": true
    }
    )
  }
  return (
    <>
      <Paper variant="st1" className="about">
        <div className="about_Container">
          <div className="about_Text">
            <div tabIndex={0} className="about_Header">
              <Typography
                onMouseLeave={(e) => {
                  e.target.style.border = 'none';
                  // synth.pause();
                  synth.cancel();
                }}
                onMouseEnter={(e) => {
                  text_Reader("Om oss.", e);

                }} sx={{
                  fontSize: {
                    lg: 100,
                    md: 70,
                    sm: 50,
                    xs: 30,
                  }
                }} variant="h1" color="secondary" >Om oss</Typography>
            </div>
            <div tabIndex={0} className="about_SubText">
              <Typography onMouseLeave={(e) => {
                e.target.style.border = 'none';
                // synth.pause();
                synth.cancel();
              }}
                onMouseEnter={(e) => {
                  text_Reader(" Vi är ett företag med stor passion för teknisk utveckling och utbildning. Vi tycker att kombinationen är spännande och hoppas att ni vara med på vår resa.", e);

                }} variant="h3" sx={{
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
            <img tabIndex={0} onMouseLeave={(e) => {
              e.target.style.border = 'none';
              // synth.pause();
              synth.cancel();
            }}
              onMouseEnter={(e) => {
                text_Reader("En bild, Daniel Johansson och Daniel Ny står,  virtuellt verklighetssystem.", e);

              }}
              src={require("../../images/Kopia-av-My_Virtual_Classroom_-Daniel2020-11-06_12-51-03.png")}
              alt="En bild, Daniel Johansson och Daniel Ny står,  virtuellt verklighetssystem."
              className="about_Img "
            />
          </div>
        </div>
        <div className="btn_Container">
          <div></div>
          <div >
            <Link tabIndex={0} to="/AboutUs" className="about_btn_Link">
              <Button tabIndex={-1} aria-label="Tryck på knappen att läsa om oss"
                onMouseLeave={(e) => {
                  e.target.style.border = 'none';
                  // synth.pause();
                  synth.cancel();
                }}
                onMouseEnter={(e) => {
                  text_Reader("Om oss! Tryck på knappen att läsa om oss", e);

                }} color="secondary" variant="contained" className="about_Btn_Page">
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
