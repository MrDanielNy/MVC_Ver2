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
          <figure className="Item_Picture" data-category={props.label}>
            <img src={props.src} alt="Coming soon" className="Item_Img" />
          </figure>
          <Paper variant="contained" className="Item_Information">
            <Typography variant="h6  n n nnnnnnnnnnnnnnnnnnnn           " color="secondary" className="Item_Text">{props.text}</Typography>
          </Paper>
        </Link>
      </li>
    </>
  );
}

export default MVC_Home_Boxes;
