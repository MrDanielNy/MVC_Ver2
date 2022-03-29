import React from "react";
import "./Contacts_In_Home.css";
import { Link } from "react-router-dom";
import MVC_Contacts from "./MVC_Contacts";

function Contacts_Link() {
  return (
    <div className="contacts">
      <div className="contacts_Container">
        <div></div>
        <div className="contacts_Title">
          <h1>Contact us</h1>
        </div>
        <div></div>
        <div className="contact_Information">
          <p className="DJ">
            <Link to="/Contacts"> Daniel Jahansson </Link>
          </p>
          <p className="DN">Daniel Ny</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts_Link;
