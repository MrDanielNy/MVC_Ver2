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
      <Paper variant="st2" color="primary" className="platform_Container">
        <div className="platform_Text_Container_">
          < Typography variant="h1" sx={{
            fontSize: {
              lg: 100,
              md: 70,
              sm: 50,
              xs: 30,
            }
          }} color="secondary" className="platform_Title" > Vad vi gör</Typography>

          <Typography variant="h3" sx={{
            fontSize: {
              lg: 23,
              md: 20,
              sm: 18,
              xs: 15,
            }
          }} color="secondary" className="platform_Text_">
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
