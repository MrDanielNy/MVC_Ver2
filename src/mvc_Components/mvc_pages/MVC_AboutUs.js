import React from "react";

import { Link } from "react-router-dom";
import "../mvc_pages/MVC_AboutUs.css"
import Contacts_Link from "./Contacts_In_Home";

function MVC_AboutUs() {
    return (
        <>

            <div className="container_AboutUs">
                {/** The logo at the bottom of the page */}
                <div className="dream_Logo">
                    <img src={require("../../images/kisspng-oculus-rift-htc-vive-playstation-vr-virtual-realit-virtual-reality-5b209e8d5bd2c6.9641947015288643973761(1).png")}></img>
                </div>
                <div className="title_About">
                    <h1>
                        We want to change today's education and invite Sweden's schools to "Education-2.0".
                    </h1>
                </div>
            </div>
            <div className="contacts_AboutUs">
                <Contacts_Link />
            </div>
        </>
    );
}

export default MVC_AboutUs;
