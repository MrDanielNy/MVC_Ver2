import React from "react";
import NavPane from "../Nav_pane";
import { Link } from "react-router-dom";

function MVC_AboutUs() {
  return (
    <>
      <h1>About us</h1>
      <li className="menu-items">
        <Link to="/">Home</Link>
      </li>
    </>
  );
}

export default MVC_AboutUs;
