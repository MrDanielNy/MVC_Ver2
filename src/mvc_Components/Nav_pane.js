import React from "react";

import { Link } from "react-router-dom";

function NavPane() {
  return (
    <>
      <nav className="nav_Pane">
        <div className="nav_Container">
          <Link to="/" className="navLogo">
            MVC
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavPane;
