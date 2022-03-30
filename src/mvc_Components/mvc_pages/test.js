import React from "react";
import "./Contacts_In_Home.css";
import { Link } from "react-router-dom";

function Test() {
  return (
    <div className="contacts_Container">
      <div className="contacts_Title">
        <h1>Contact us</h1>
      </div>

      <div className="contact_Information">
        <p className="DJ">
          <Link to="/Contacts"> Daniel Jahansson </Link>
        </p>
        <p className="DN">Daniel Ny</p>
      </div>
    </div>
  );
}

export default Test;
