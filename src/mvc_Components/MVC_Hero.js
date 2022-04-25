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
import { useSpeechSynthesis } from 'react-speech-kit';

function MVC_Hero() {
  const { speak } = useSpeechSynthesis();
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const handleClick = () => {
    console.log("Testing...");

    setClick(!click);
  };
  /** It checks the screen size. If the screen is small, it sends an empty 
   * string to Video as source and the background image in CSS shows.
   */
  const screen_Checker = () => {
    if (window.innerWidth > 768 && window.innerHeight > 450) {
      console.log("Not a mobile screen")
      return video;
    }
    else if (window.innerHeight < 450) {
      console.log(window.innerHeight + " Mobile Screen")
      return "";
    }

  }
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
          <h1 onMouseLeave={(e) => {
            console.log("Hello dude!");
            e.target.style.border = 'none';
          }}
            onClick={(e) => {
              console.log("Hello dude!");
              e.target.style.border = '2px solid rgba(147, 250, 165)';
              speak({
                text: "My virtual Classroom", name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: true, "default": true
              }
              )

            }} className="title">My Virtual Classroom</h1>
          <p onMouseLeave={(e) => {
            console.log("Hello dude!");
            e.target.style.border = 'none';
          }} onClick={(e) => {
            e.target.style.border = '2px solid rgba(147, 250, 165)';
            speak({
              text: ' Vi vill förändra dagens utbildning och bjuder in Sveriges skolor till Utbildning-2.0.'
            })
          }} className="subTitle_">
            Vi vill förändra dagens utbildning och bjuder in Sveriges skolor
            till “Utbildning-2.0”.
          </p>

          <p>{/** Other staffs if needed here */}</p>
          <Link to="/Contacts">
            <button className="hero_Btn">Contact us</button>
          </Link>
        </div>

        {/** TODO: Add a direct link to contact page or some other important links  */}
        <div>

        </div>
      </div>
    </>
  );
}
export default MVC_Hero;
