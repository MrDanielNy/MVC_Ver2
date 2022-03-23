import React from "react";
import "../../App.css";
import MVC_Hero from "../MVC_Hero";
import Boxes from "./Boxes";

function MVC_Home() {
  return (
    <>
      <MVC_Hero />
      {/* Platform is placed in Hero */}
      <Boxes />
    </>
  );
}

export default MVC_Home;
