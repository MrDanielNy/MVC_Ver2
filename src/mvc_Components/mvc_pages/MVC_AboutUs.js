import React from "react";

import { Link } from "react-router-dom";
import "../mvc_pages/MVC_AboutUs.css"
import Contacts_Link from "./Contacts_In_Home";

function MVC_AboutUs() {
    return (
        <>

            <div className="container_AboutUs">
                {/** The logo at the bottom of the page */}

                <div className="title_About">
                    <h1>
                        We want to change today's education and invite Sweden's schools to "Education-2.0".
                    </h1>
                </div>

                <div className="our_Story">
                    <h1 className="our_Story_Title" >
                        Hur allt började
                    </h1>
                    {/** TODO: Find a nice font here */}
                    {/** TODO: Link Daniel to a LinkedIn page */}
                    <p className="our_Story_Text">Daniel Johansson som efter 10 år fortfarande jobbar inom skolan och dagligen ser hur ett
                        stort antal elever behöver hjälp för att lösa olika uppgifter ville se om det finns lösningar inom dagens teknik. I det praktiska ämnet träslöjd blir svårigheterna för vissa elever så pass att en elevassistent/elevresurs gör större delen av arbetet istället för eleven. Eleverna vill lyckas, vill klara av saker och ting själva men kan ibland inte på grund av någon form av funktionsnedsättning.

                        <br /> My Virtual Classroom skapades när Daniel Ny, med bakgrund som spel- och apputvecklare kom in
                        och delade med sig av sina erfarenheter. My Virtual Classrooms mål just nu är att skapa en digital lösning i en virtuell värld som ett verktyg och hjälpmedel för att lyckas på mer egen hand. Samma läroplan, samma lektion, samma uppgift men i en virtuell träslöjd!
                    </p>

                </div>

            </div>

            <div className="contacts_AboutUs">
                <Contacts_Link />
            </div>
        </>
    );
}

export default MVC_AboutUs;
