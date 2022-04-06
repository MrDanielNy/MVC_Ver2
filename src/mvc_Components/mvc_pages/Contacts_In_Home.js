import React from "react";
import "./Contacts_In_Home.css";
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
          <button className="btn_Contact">Contact us</button>
        </div>
      </div>
    </div>
  );
}

export default Contacts_Link;
