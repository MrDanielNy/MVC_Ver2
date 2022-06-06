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

import { useSpeechSynthesis } from 'react-speech-kit';

function Contacts_Link() {
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
    if (localStorage.getItem("textReaderStatus") === "true") {
      e.target.style.border = '4px solid yellow';
    }
    speak({
      text: input_Text, name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: true, "default": true
    }
    )
  }
  return (
    <div className="main_Container">
      <div className="contacts_Container">

        <div className="contacts_Title">
          <Typography className="contacts_Title_" tabIndex={0} onMouseLeave={(e) => {
            e.target.style.border = 'none';
            // synth.pause();
            synth.cancel();
          }}
            onMouseEnter={(e) => {
              text_Reader("Välkomna att kontakta oss!", e);

            }}
            onFocus={(e) => {
              synth.cancel();
              text_Reader("Välkomna att kontakta oss!", e);
              e.target.style.border = 'none';
            }}

            variant="h1" sx={{
              fontSize: {
                lg: 100,
                md: 70,
                sm: 50,
                xs: 30,
              }
            }}  >Välkomna att kontakta oss! </Typography>
          <Typography tabIndex={0} onMouseLeave={(e) => {
            e.target.style.border = 'none';
            // synth.pause();
            synth.cancel();
          }}
            onMouseEnter={(e) => {
              text_Reader("Vi söker hela tiden efter nya utmaningar, samarbeten och dialoger.", e);

            }}

            onFocus={(e) => {
              synth.cancel();
              text_Reader("Vi söker hela tiden efter nya utmaningar, samarbeten och dialoger.", e);
              e.target.style.border = 'none';
            }}

            variant="h3_Contacts" sx={{
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
          <Link tabIndex={1} to="/Contacts" className="about_btn_Link">
            <Button onMouseLeave={(e) => {
              e.target.style.border = 'none';
              // synth.pause();
              synth.cancel();
            }}
              onMouseEnter={(e) => {
                text_Reader("Kontakta oss! Tryck på knappen", e);

              }}
              onFocus={(e) => {
                synth.cancel();
                text_Reader("Kontakta oss! Tryck på knappen", e);
                e.target.style.border = 'none';
              }}
              tabIndex={0} color="secondary" variant="contained" className="btn_Contact">
              <Typography
                variant="h6">
                Kontakta oss </Typography>
            </Button>
          </Link>
        </div>
        {/** TODO: Make a link to MVC's social media */}
        {/** Add content reader for social media's icons! */}
        <div className="social_Links_Container_">
          <div className="facebook">
            <img tabIndex={0}
              src={require("../../images/facebook.png")}
              alt="Fäicebook-ikon. en länk till my virtual classrooms Fäicebook"
            />
          </div>
          <div className="linkedIn">
            <img tabIndex={0}
              src={require("../../images/linkedIn.png")}
              alt=" LinkdIn-ikon. en länk till my virtual classrooms LinkdIn "
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contacts_Link;
