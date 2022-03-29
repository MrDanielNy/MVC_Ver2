import React from "react";
import "../../App.css";
import MVC_Hero from "../MVC_Hero";
import Boxes from "./Boxes";

import AboutUs_Link from "./About_In_Home";
import Contacts_Link from "./Contacts_In_Home";
/** The main page */
function MVC_Home() {
  return (
    <>
      <MVC_Hero />
      {/* Platform is placed in Hero */}
      <Boxes />
      <AboutUs_Link />
      <Contacts_Link />
    </>
  );
}

export default MVC_Home;
