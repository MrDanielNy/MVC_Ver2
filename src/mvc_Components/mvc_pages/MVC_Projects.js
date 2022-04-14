import React from "react";
import Contacts_Link from "./Contacts_In_Home";
import "./MVC_Projects.css"
import ProjectMagicalMan from "./Project_Magical_Man";


const MVC_Projects = () => {
  return (
    <>
      <div className="project_Container">
        <h1 className="project_Title">Våra projekt</h1>

        <div className="project_One_Container">

          <div className="project_One">
            <h1 className="project_One_Title">
              Träslöjd i VR
            </h1>

            <p className="project_One_Text">“My Virtual Classroom utvecklar just nu en digital träslöjd i en virtuell värld för elever med funktionsnedsättningar i skolan. Vårt mål är att öka elevernas egna förutsättningar och skapa en mer jämlik lektion, oavsett funktionsvariation. Detta verktyg öppnar upp nya möjligheter för skolan att kunna undervisa träslöjd för fler elever på nya sätt.”
              Se vår film om vår vän Alex.
            </p>
          </div>
          <div >
            <img className="project_One_Image" src={require("../../images/Project.png")} />
          </div>

        </div>


        <div className="project_Two_Container">
          <div className="project_Two">
            <h1 className="project_Two_Title">
              Hangaren
            </h1>
            <p className="project_Two_Text">Som ett steg i att visa hur olika delar som Kultur och Teknik kan bli ett fantastiskt projekt så har vi skapat miljö i VR och film i Hangaren, Linköping.  Se resultatet här
            </p>
          </div>
          <div >
            <img className="project_Two_Image" src={require("../../images/Project.png")} />
          </div>
        </div>
      </div>
      <Contacts_Link />
    </>
  )
};

export default MVC_Projects;
