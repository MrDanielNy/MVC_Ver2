import React from "react";
import "../mvc_Components/MVC_Hero.css";
import "../App.css";
import NavPane from "./Nav_pane";
import "./Nav_pane.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Platform from "./mvc_pages/Platform";

function MVC_Hero() {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const handleClick = () => {
    console.log("Testing...");
    setClick(!click);
  };
  return (
    <>
      <div className="mvc-hero-container">
        {/* A video link to have the live backgrond*/}
        <div></div>
        <div>
          <h1 className="title">My Virtual Classroom</h1>
          <p className="subTitle">
            Vi vill förändra dagens utbildning och bjuder in Sveriges skolor
            till “Utbildning-2.0”.
          </p>

          <p>{/** Other staffs if needed here */}</p>
          <button className="hero_Btn">Contact us</button>
        </div>

        {/** TODO: Add a direct link to contact page or some other important links  */}
        <div></div>
        <Platform />
      </div>
    </>
  );
}
export default MVC_Hero;
