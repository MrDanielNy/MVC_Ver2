import React from "react";
import "./Contacts_In_Home.css";
import "./MVC_Contacts_Footer"
import { Link } from "react-router-dom";

function Contacts_Link() {
  return (
    <div className="main_Container">
      <div className="contacts_Container">
        <div></div>
        <div className="contacts_Title">
          <h1>Lets get in touch!</h1>
          <h6 className="subTitle">
            Vi söker hela tiden efter nya utmaningar, samarbeten och dialoger.
          </h6>
        </div>

        <div>
          <Link to="/Contacts">
            <button className="btn_Contact">Contact us</button>
          </Link>
        </div>
        {/** TODO: Make a link to MVC's social media */}
        <div className="social_Links_Container">
          <div className="facebook">
            <img
              src={require("../../images/facebook.png")}
              alt="Face book link"
            />
          </div>
          <div className="linkedIn">
            <img
              src={require("../../images/linkedIn.png")}
              alt="Face book link"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contacts_Link;
