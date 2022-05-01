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
          <Typography color="secondary" variant="h5" className="platform_Text_">
            My Virtual Classroom är ett initiativ med fokus på att skapa och
            utveckla nya innovativa verktyg med hjälp av virtuell verklighet.
            Det är även namnet på den plattform som i framtiden kommer utvecklas
            och fyllas med nya möjliga upplevelser inom både utbildning och
            kultur. Vi vill förändra dagens utbildning i våra skolor och bjuder
            in skolorna till “Utbildning-2.0”.
          </Typography>
        </div>
      </Paper>
    </>
  );
}

export default Platform;
