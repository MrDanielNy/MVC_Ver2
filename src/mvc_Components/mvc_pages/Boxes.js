import React from "react";
import MVC_Home_Boxes from "./MVC_Home_Boxes";
import { useTheme, withTheme } from "@mui/material";
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
function Boxes() {
  const theme = useTheme();
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
    e.target.style.border = '2px solid rgba(147, 250, 165)';
    speak({
      text: input_Text, name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: true, "default": true
    }
    )
  }

  return (
    <div variant="contained" className="Boxes">

      <div tabIndex={7} className="Boxes_Container">
        <Typography sx={{
          fontSize: {
            lg: 100,
            md: 70,
            sm: 50,
            xs: 30,
          }
        }} onMouseLeave={(e) => {
          e.target.style.border = 'none';
          // synth.pause();
          synth.cancel();
        }}
          onMouseEnter={(e) => {
            text_Reader("My Virtual Classroom!", e);

          }} variant="h1" className="boxes_Title" > My Virtual Classroom!</Typography>
        <div className="Items">
          {/** TODO change the content of each card. Fetching from database */}

          <div tabIndex={8} >
            <MVC_Home_Boxes
              src={require("../../images/alex-scaled.jpg")}
              text="Skapa lådor, smörkniv, fågelholk eller fritt! Träslöjden låter dig göra momenten samtidigt som du lär dig teorin bakom. Den är anpassad så att så många som möjligt kan göra alla moment själva och när du är klar skriver du ut din skapelse i en 3D skrivare."
              label="Träslöjd"
              path="/Projects"
            />

          </div>
          <div tabIndex={9} >
            <MVC_Home_Boxes
              src={require("../../images/alex-scaled.jpg")}
              text="Göra virtuella stadsvandringar med engelska i fokus, träna på uttal och att konversera med andra människor digitalt.
"
              label="Engelska"
              path="/Projects"
            />
          </div>
          <div tabIndex={10} >
            <MVC_Home_Boxes
              src={require("../../images/alex-scaled.jpg")}
              text="Många tycker att det är svårt att tala inför andra. Vi låter eleven träna på det genom att börja med att tala inför en mindre grupp och sedan öka antalet åskådare. Man kan simulera olika nivåer av distraktion och även välja miljö. 
"
              label="Träna på att tala inför andra"
              path="/Projects"
            />
          </div>
          <div tabIndex={11} >
            <MVC_Home_Boxes
              src={require("../../images/alex-scaled.jpg")}
              text="Mängdträna t.ex multiplikationstabellen, visualisera matematiska problem och former, lära sig om pengars värde, överslagsräkning i en spelmiljö."
              label="Matematik"
              path="/Projects"
            />
          </div>
          <div tabIndex={12} >
            <MVC_Home_Boxes
              src={require("../../images/alex-scaled.jpg")}
              text="Träna förmågor som att röra sig och koordination. Vi skapar anpassade träningsprogram för bland annat rullstolsburna samt träna på teori om kropp och vad som är nyttigt och onyttigt. Idrott ska vara kul, vi kombinerar idrott och spel för att öka rörelse för eleverna."
              label="Idrott"
              path="/Projects"
            />
          </div>
          <div tabIndex={13} >
            <MVC_Home_Boxes
              src={require("../../images/alex-scaled.jpg")}
              text="Tänk er ett virtuellt Kahoot! Spela själv mot datorn (eller dig själv) alternativt möta klassen i en turnering! Kanske öva inför ett prov, göra läxor mm.
"
              label="Quizspelet"
              path="/Projects"
            />
          </div>
        </div>
      </div>
    </div >
  );
}
export default Boxes;
