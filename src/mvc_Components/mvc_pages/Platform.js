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
function Platform() {
  return (
    <>
      <Paper variant="contained" color="primary" className="platform_Container">
        <div className="platform_Text_Container_">
          < Typography variant="h3" color="secondary" className="platform_Title">Vad vi gör</Typography>
          <Typography sx={{ typography: { sm: 'body1', xs: 'body2' } }} color="secondary" variant="h5" className="platform_Text_">
            My Virtual Classroom “MVC” är ett initiativ med fokus på att skapa och utveckla nya innovativa verktyg med hjälp av virtuell verklighet.
            MVC även namnet på den plattform som vi nu utvecklar och ska fyllas med nya möjliga upplevelser inom både utbildning och kultur.
            Vi har en stark anknytning till skola och ser hur utbildning kan ta tillvara på dagens tekniska utveckling och möjligheter som ett komplement till undervisningen.
            Men VR som verktyg skapar nya möjligheter att mentalt förflytta sig till helt andra platser och uppleva miljöer som annars inte kunnat upplevas,samt anpassas och skräddarsys till individ för att öka tillgängligheten.

          </Typography>
        </div>
      </Paper>
    </>
  );
}

export default Platform;
