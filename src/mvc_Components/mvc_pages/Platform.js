import React from "react";
import "../mvc_pages/Platform.css";
import {
  Button,
  Paper,
  Typography,
  Box,
  ThemeProvider,
  createTheme
} from "@mui/material";
import { useSpeechSynthesis } from 'react-speech-kit';
function Platform() {
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
  const OurPlanText = " My Virtual Classroom “MVC” är ett initiativ med fokus på att skapa och utveckla nya innovativa verktyg med hjälp av virtuell verklighet. MVC även namnet på den plattform som vi nu utvecklar och ska fyllas med nya möjliga upplevelser inom både utbildning och kultur. Vi har en stark anknytning till skola och ser hur utbildning kan ta tillvara på dagens tekniska utveckling och möjligheter som ett komplement till undervisningen. Men VR som verktyg skapar nya möjligheter att mentalt förflytta sig till helt andra platser och uppleva miljöer som annars inte kunnat upplevas, samt anpassas och skräddarsys till individ för att öka tillgängligheten."
  return (
    <>

      <Paper variant="st2" color="primary" className="platform_Container">

        <div className="platform_Text_Container_">

          < Typography tabIndex={0} onMouseLeave={(e) => {
            e.target.style.border = 'none';
            // synth.pause();
            synth.cancel();
          }}
            onMouseEnter={(e) => {
              text_Reader("Vad vi gör?", e);

            }} variant="h1" sx={{
              fontSize: {
                lg: 100,
                md: 70,
                sm: 50,
                xs: 30,
              }
            }} color="secondary" className="platform_Title" > Vad vi gör</Typography>

          <Typography tabIndex={0} onMouseLeave={(e) => {
            e.target.style.border = 'none';
            // synth.pause();
            synth.pause();
          }}
            onMouseEnter={(e) => {
              text_Reader(" My Virtual Classroom “MVC” är ett initiativ med fokus på att skapa och utveckla nya innovativa verktyg med hjälp av virtuell verklighet. MVC även namnet på den plattform som vi nu utvecklar och ska fyllas med nya möjliga upplevelser inom både utbildning och kultur. Vi har en stark anknytning till skola och ser hur utbildning kan ta tillvara på dagens tekniska utveckling och möjligheter som ett komplement till undervisningen. Men VR som verktyg skapar nya möjligheter att mentalt förflytta sig till helt andra platser och uppleva miljöer som annars inte kunnat upplevas, samt anpassas och skräddarsys till individ för att öka tillgängligheten.", e);

            }} variant="h3" sx={{
              fontSize: {
                lg: 23,
                md: 20,
                sm: 18,
                xs: 15,
              }
            }} color="secondary" className="platform_Text_">
            {OurPlanText}

          </Typography>

        </div>

      </Paper>

    </>
  );
}

export default Platform;
