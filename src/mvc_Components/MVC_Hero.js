import React from "react";
import "../mvc_Components/MVC_Hero.css";
import "../App.css";
import NavPane from "./Nav_pane";
import "./Nav_pane.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Platform from "./mvc_pages/Platform";
import video from "../images/video-2.mp4";
import video2 from "../images/video-1.mp4"
import img_Background from "../images/ATC.png"

function MVC_Hero() {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const handleClick = () => {
    console.log("Testing...");

    setClick(!click);
  };
  /** It checks the screen size. If the screen is small, it sends an empty 
   * screen to Video as source and the background image in CSS shows.
   */
  const screen_Checker = () => {
    console.log("Hello")
    if (window.innerWidth > 768) {
      console.log("Not a mobile screen")
      return video;
    }
    else {
      console.log("Mobile Screen")
      return "";
    }

  }
  console.log(typeof video)
  console.log(video2)
  console.log(typeof img_Background)
  return (
    <>
      <div className="mvc-hero-container">

        {/* A video link to have the live backgrond*/}
        <div className="background_Container_">
          <video className=".background-video" loop autoPlay muted>
            <source src={screen_Checker()} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h1 className="title">My Virtual Classroom</h1>
          <p className="subTitle_">
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
