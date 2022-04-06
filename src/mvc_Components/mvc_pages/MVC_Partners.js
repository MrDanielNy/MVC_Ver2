import React from "react";
import "./MVC_Partners.css";
import { Link } from "react-router-dom";

function MVC_Partners() {
  return (
    <div className="logo_Container">
      <div className="linkoping">
        <Link
          to={{
            pathname: "https://www.linkoping.se/",
          }}
          target="_blank"
        >
          <img src={require("../../images/linkoping.png")} alt="" />
        </Link>
      </div>
      <div className="liu">
        <img src={require("../../images/Liu.png")} alt="" />
      </div>
      <div className="ATC">
        <img src={require("../../images/ATC.png")} alt="" />
      </div>
      <div className="molk">
        <img src={require("../../images/molk.png")} alt="" />
      </div>
      <div className="dRobotics">
        <img
          src={require("../../images/drobotics.png")}
          alt=" Dyno Robotics' logo"
        />
      </div>
    </div>
  );
}

export default MVC_Partners;
