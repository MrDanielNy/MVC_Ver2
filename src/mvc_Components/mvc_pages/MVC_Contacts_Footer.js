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
          <Mailto
            email="daniel.ny@myvirtualclassroom.se"
            style="text-decoration:none"
            subject=""
            body=""
          >
            <p> daniel.ny@myvirtualclassroom.se</p>
          </Mailto>
        </div>
        <div className="address">
          <h4>Address</h4>
          <h4>Find us on Google Map</h4>
          <a
            href="http://maps.google.com/?q=Wahlbecksgatan 25
582 13 Linköping"
          >
            <p>Wahlbecksgatan 25 582 13 Linköping </p>
          </a>
          {/**TODO: Add google map API to show MVC's address */}
        </div>
      </div>
      {/** TODO: Make a link to MVC's social medias */}
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
  );
}

export default MVC_Contacts_Footer;
