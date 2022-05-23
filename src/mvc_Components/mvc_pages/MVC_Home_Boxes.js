import React from "react";
import { Link } from "react-router-dom";
import "./Boxes.css";

import {
  Button,
  Paper,
  Typography,
  Box,
  ThemeProvider,
  createTheme
} from "@mui/material";
import { useSpeechSynthesis } from 'react-speech-kit';

function MVC_Home_Boxes(props) {
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
      <li className="Item">

        <div className="Item_Link" >
          <Typography onMouseLeave={(e) => {
            e.target.style.border = 'none';
            // synth.pause();
            synth.cancel();
          }}
            onMouseEnter={(e) => {
              text_Reader(props.label, e);

            }} variant="h3" >
            <figure className="Item_Picture" data-category={props.label}>
              <img src={props.src} alt={props.label + "."} className="Item_Img" />
            </figure>
          </Typography>
          <Paper variant="st3" className="Item_Information">
            <Typography onMouseLeave={(e) => {
              e.target.style.border = 'none';
              synth.cancel();

            }} onMouseEnter={(e) => {
              text_Reader(props.text, e);
            }} variant="h3" sx={{ typography: { sm: 'body1', xs: 'body2' } }} className="Item_Text">{props.text}</Typography>
          </Paper>
        </div>
      </li>
    </>
  );
}

export default MVC_Home_Boxes;
