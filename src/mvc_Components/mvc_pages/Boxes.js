import React from "react";
import MVC_Home_Boxes from "./MVC_Home_Boxes";
import "./Boxes.css";

function Boxes() {
  return (
    <div className="Boxes">

      <div className="Boxes_Container">
        <h1 className="boxes_Title">My Virtual Classroom!</h1>
        <div className="Items">
          {/** TODO change the content of each card. Fetching from database */}
          <MVC_Home_Boxes
            src={require("../../images/alex-scaled.jpg")}
            text="This is where we dfgdfgdfgdfgneed to improve the educations."
            label="Självständighet"
            path="/Projects"
          />

          <MVC_Home_Boxes
            src={require("../../images/alex-scaled.jpg")}
            text="This is where we dfgdfgdfgdfgneed to improve the educations"
            label="Robots"
            path="/Projects"
          />

          <MVC_Home_Boxes
            src={require("../../images/alex-scaled.jpg")}
            text="This is where we dfgdfgdfgdfgneed to improve the educations"
            label="Robots"
            path="/Projects"
          />

          <MVC_Home_Boxes
            src={require("../../images/alex-scaled.jpg")}
            text="This is where we need to improve the educations"
            label="Robots"
            path="/Projects"
          />

          <MVC_Home_Boxes
            src={require("../../images/alex-scaled.jpg")}
            text="  need to improve the educations"
            label="Robots"
            path="/Projects"
          />
          <MVC_Home_Boxes
            src={require("../../images/alex-scaled.jpg")}
            text="This is where we need to improve the educations"
            label="Robots"
            path="/Projects"
          />
        </div>
      </div>
    </div>
  );
}
export default Boxes;
