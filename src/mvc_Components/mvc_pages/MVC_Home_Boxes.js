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
    if (localStorage.getItem("textReaderStatus") === "true") {
      e.target.style.border = '2px solid yellow';
    }
    speak({
      text: input_Text, name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: true, "default": true
    }
    )
  }

  return (
    <>
      <li className="Item">

        <div className="Item_Link" >
          <Typography

            variant="h3" >
            <figure className="Item_Picture" >

              <img tabIndex={0} onMouseLeave={(e) => {
                e.target.style.border = 'none';
                // synth.pause();
                synth.cancel();
              }}
                onMouseEnter={(e) => {
                  text_Reader(props.label, e);

                }}

                onFocus={(e) => {
                  synth.cancel();
                  text_Reader(props.label, e);
                  e.target.style.border = 'none';
                }} src={props.src} alt={props.label + "."} className="Item_Img" />

            </figure>
          </Typography>
          <Paper variant="st3" className="Item_Information">
            <h4 className="label_">{props.label}</h4>
            <Typography tabIndex={0} onMouseLeave={(e) => {
              e.target.style.border = 'none';
              synth.cancel();

            }} onMouseEnter={(e) => {
              text_Reader(props.text, e);
            }}

              onFocus={(e) => {
                synth.cancel();
                text_Reader(props.text, e);
                e.target.style.border = 'none';
              }}

              variant="h3" sx={{ typography: { sm: 'body1', xs: 'body2' } }} className="Item_Text">{props.text}</Typography>
          </Paper>
        </div >
      </li>
    </>
  );
}

export default MVC_Home_Boxes;
