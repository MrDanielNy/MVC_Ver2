import React from "react";

import { Link } from "react-router-dom";
import "../mvc_pages/MVC_AboutUs.css"
import Contacts_Link from "./Contacts_In_Home";
import { RiMailLine } from "react-icons/ri";


const Mailto = ({ email, subject, body, children }) => {
    return (
        <a style={{ textDecoration: 'none' }}
            href={`mailto:${email}?subject=${encodeURIComponent(subject) || ""
                }&body=${encodeURIComponent(body) || ""}`}
        >
            {children}
        </a>
    );
};

function MVC_AboutUs() {


    return (
        <>

            <div className="container_AboutUs">

                <div className="about_DJ_Container">
                    <div>
                        <h1 className="title_About_DJ">
                            Grundare och VD Daniel Johansson
                        </h1>
                    </div>

                    <div className="about_DJ">
                        <div>
                            <p className="our_Story_Text">Daniel Johansson som efter 10 år fortfarande jobbar inom skolan och dagligen ser hur ett
                                stort antal elever behöver hjälp för att lösa olika uppgifter ville se om det finns lösningar inom dagens teknik. I det praktiska ämnet träslöjd blir svårigheterna för vissa elever så pass att en elevassistent/elevresurs gör större delen av arbetet istället för eleven. Eleverna vill lyckas, vill klara av saker och ting själva men kan ibland inte på grund av någon form av funktionsnedsättning.
                            </p>
                        </div>
                        <div>
                            <Mailto

                                email="daniel.johansson@myvirtualclassroom.se"
                                subject=""
                                body=""
                            >
                                <p className="DJ_Email"> <div className="icon"><RiMailLine /> </div>daniel.johansson@myvirtualclassroom.se</p>
                            </Mailto>
                        </div>




                    </div>
                </div>


                <div className="about_DN_Container">

                    <div>
                        <h1 className="title_About_DN">
                            Utv.chef och Vice VD Daniel Ny
                        </h1>
                    </div>

                    <div className="about_DN">
                        < div >
                            <p className="our_Story_Text"> My Virtual Classroom skapades när Daniel Ny, med bakgrund som spel- och apputvecklare kom in
                                och delade med sig av sina erfarenheter. My Virtual Classrooms mål just nu är att skapa en digital lösning i en virtuell värld som ett verktyg och hjälpmedel för att lyckas på mer egen hand. Samma läroplan, samma lektion, samma uppgift men i en virtuell träslöjd!
                            </p>

                        </div>
                        <div>
                            <Mailto
                                email="daniel.ny@myvirtualclassroom.se"
                                style="text-decoration:none"
                                subject=""
                                body=""
                            >
                                <p className="DN_Email" > <div className="icon"><RiMailLine /> </div>daniel.ny@myvirtualclassroom.se</p>
                            </Mailto>
                        </div>




                    </div>

                </div>





                <div className="contacts_AboutUs">
                    {/*   It can be used here but we have DN and DJ's Email address i this page
                  <Contacts_Link /> */}
                </div>
            </div>
        </>
    );
}

export default MVC_AboutUs;
