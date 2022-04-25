import { useRef, useState } from "react";
import Platform from "./Platform";
import "./ToggleKey.css"
import { Link, Route, withRouter } from "react-router-dom";
import MVC_Contacts from "./MVC_Contacts";

const Switch = ({ label, refr, props }) => {
    refr = useRef();
    const [selects, setSelects] = useState("black");
    const handleClick = (e) => {
        const checked = e.target.checked;
        if (checked && e.target.name === "visually impaired") {
            console.log(e.target.name + " Checked " + refr.current.backgroundColor)
            refr.current.backgroundColor = "red";
            setSelects("red")
            console.log(selects);
            MVC_Contacts();

            props.history.push({
                pathname: '/src/mvc_Components/mvc_pages/MVC_Contacts',
                state: { selects }
            });

        }
        else {
            console.log(e.target + " Not checked")
        }
    }
    return (
        <>

            {" "}
            <div className="toggle-switch">
                <input ref={refr} onClick={(e) => { handleClick(e) }} type="checkbox" className="checkbox"
                    name={label} id={label} />
                <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>


        </>

    );
};

export default (Switch); 