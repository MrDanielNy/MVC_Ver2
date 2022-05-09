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

function MVC_Home_Boxes(props) {
  return (
    <>
      <li className="Item">

        <Link className="Item_Link" to={props.path}>
          <Typography variant="h3" >
            <figure className="Item_Picture" data-category={props.label}>
              <img src={props.src} alt="Coming soon" className="Item_Img" />
            </figure>
          </Typography>
          <Paper variant="st3" className="Item_Information">
            <Typography variant="h3" sx={{ typography: { sm: 'body1', xs: 'body2' } }} color="secondary" className="Item_Text">{props.text}</Typography>
          </Paper>
        </Link>
      </li>
    </>
  );
}

export default MVC_Home_Boxes;
