import React from "react";
import { Link } from "react-router-dom";
import "./Boxes.css";

function MVC_Home_Boxes(props) {
  return (
    <>
      <li className="Item">
        <Link className="Item_Link" to={props.path}>
          <figure className="Item_Picture" data-category={props.label}>
            <img src={props.src} alt="Coming soon" className="Item_Img" />
          </figure>
          <div className="Item_Information">
            <h5 className="Item_Text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default MVC_Home_Boxes;
