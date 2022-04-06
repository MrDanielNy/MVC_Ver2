import React from "react";
import "../mvc_Components/MVC_Hero.css";
import "../App.css";
import NavPane from "./Nav_pane";
import "./Nav_pane.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Platform from "./mvc_pages/Platform";
import video from "../images/video-1.mp4";

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
        <div className="background_Container">
          <video className=".background-video" loop autoPlay muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h1 className="title">My Virtual Classroom</h1>
          <p className="subTitle">
            Vi vill förändra dagens utbildning och bjuder in Sveriges skolor
            till “Utbildning-2.0”.
          </p>

          <p>{/** Other staffs if needed here */}</p>
          <Link to="/Contacts">
            <button className="hero_Btn">Contact us</button>
          </Link>
        </div>

        {/** TODO: Add a direct link to contact page or some other important links  */}
        <div></div>
      </div>
    </>
  );
}
export default MVC_Hero;
