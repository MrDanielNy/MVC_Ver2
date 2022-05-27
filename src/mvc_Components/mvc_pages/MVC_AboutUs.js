import React from "react";

import { Link } from "react-router-dom";
import "../mvc_pages/MVC_AboutUs.css"
import Contacts_Link from "./Contacts_In_Home";
import { RiMailLine } from "react-icons/ri";
import MVC_Contacts from "./MVC_Contacts";
import Contacts_In_Home from "./Contacts_In_Home"
import {
    Button,
    Paper,
    Typography,
    Box,
    ThemeProvider,
    createTheme
} from "@mui/material";

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
                    <div className="DJ_Title_Image">
                        <h1 className="title_About_DJ">
                            Grundare och VD Daniel Johansson
                        </h1>
                        <img className="DJ_Image" src={require("../../images/DJ.jpg")} alt="En bild av Daneil Johansson" />
                    </div>

                    <Paper className="about_DJ">
                        <div>
                            <p className="our_Story_Text">
                                “Mina projektidéer utgår från mina erfarenheter som pedagog där jag dagligen jobbar nära elever med och utan olika sorters funktionsvariationer. Jag har alltid försökt att hitta ett sätt att arbeta individanpassat och funderat på hur man med dagens teknik kan öppna nya dörrar för elever som vissa aldrig skulle fått en chans att öppnas.<br /><br />
                                Alla barn vill lyckas, och jag vill se till att så många som möjligt får möjligheter på sina egna villkor och förutsättningar.”


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




                    </Paper>
                </div>


                <div className="about_DN_Container">

                    <div className="DN_Title_Image">
                        <Typography variant="h4" className="title_About_DN">
                            Utv.chef och Vice VD Daniel Ny
                        </Typography>
                        <img className="DN_Image" src={require("../../images/DJ.jpg")} />
                    </div>

                    <Paper className="about_DN">
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




                    </Paper>

                </div>





                <div className="contacts_AboutUs">
                    {/*   It can be used here but we have DN and DJ's Email address i this page
                  <Contacts_Link /> */}
                </div>
            </div>
            <Contacts_In_Home />
        </>
    );
}

export default MVC_AboutUs;
