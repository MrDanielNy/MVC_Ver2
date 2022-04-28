import "./App.css";
import NavPane from "./mvc_Components/Nav_pane";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import MVC_Home from "./mvc_Components/mvc_pages/MVC_Home";
import MVC_Projects from "./mvc_Components/mvc_pages/MVC_Projects";
import MVC_AboutUs from "./mvc_Components/mvc_pages/MVC_AboutUs";
import MVC_Contacts from "./mvc_Components/mvc_pages/MVC_Contacts";
import { ThemeContext } from 'styled-components';

function App() {
  // Fetch from local storage

  console.log("///////////" + localStorage.getItem("theme"))
  const [theme, toggleTheme] = useState(localStorage.getItem("theme"));
  return (
    <Router>
      {/** Navbar is placed here because it shoud be always on top of all elements in the page */}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <NavPane />
      </ThemeContext.Provider>
      <Routes>
        <Route path="/" element={<MVC_Home />} />
        <Route path="/Projects" element={<MVC_Projects />} />
        <Route path="/AboutUs" element={<MVC_AboutUs />} />
        <Route path="/Contacts" element={<MVC_Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
