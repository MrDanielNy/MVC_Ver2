import React from "react";
import "../mvc_pages/About_In_Home.css";
import { Link } from "react-router-dom";
function AboutUs_Link() {
  return (
    <>
      <div className="about">
        <div className="about_Container">
          <div className="about_Img">
            <img
              src={require("../../images/Kopia-av-My_Virtual_Classroom_-Daniel2020-11-06_12-51-03.png")}
              alt="Two men! Daniel Johansson and Daniel Ny."
              className="about_Img "
            />
          </div>
          <div className="about_Text">
            <h2>My Virtual Classroom</h2>
            <p>
              sadasdasdasd asd asd asda sadasdasdasd asd asd asdasdasd as ad
              asdasd asd asd asdasd
            </p>
          </div>
        </div>
        <div className="btn_Container">
          <div></div>
          <div>
            <Link to="/AboutUs">
              <button className="about_Btn_Page">About Us</button>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
export default AboutUs_Link;
