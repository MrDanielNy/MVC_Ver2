import React from "react";
import "./MVC_Contacts_Footer.css";
import "./MVC_Contacts";
/** Email link  */
const Mailto = ({ email, subject, body, children }) => {
  return (
    <a
      href={`mailto:${email}?subject=${
        encodeURIComponent(subject) || ""
      }&body=${encodeURIComponent(body) || ""}`}
    >
      {children}
    </a>
  );
};

function MVC_Contacts_Footer() {
  return (
    <div className="container">
      <div className="contacts">
        <div className="DJ_Mail">
          <h3>Grundare och VD Daniel Johansson</h3>

          <Mailto
            style={{ textDecoration: "none" }}
            email="daniel.johansson@myvirtualclassroom.se"
            subject=""
            body=""
          >
            <p> daniel.johansson@myvirtualclassroom.se</p>
          </Mailto>
        </div>

        <div className="DN_Mail">
          <h3>Utv.chef och Vice VD Daniel Ny</h3>

          <Mailto email="daniel.ny@myvirtualclassroom.se" subject="" body="">
            <p> daniel.ny@myvirtualclassroom.se</p>
          </Mailto>
        </div>
        <div className="address">
          <h4>Address</h4>
          <p>Tanneförs gamlagatan 24 </p>
          {/**TODO: Add google map API to show MVC's address */}
          <p>Find us on Google Map</p>
        </div>
      </div>
    </div>
  );
}

export default MVC_Contacts_Footer;
