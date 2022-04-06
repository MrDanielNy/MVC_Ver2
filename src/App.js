import "./App.css";
import NavPane from "./mvc_Components/Nav_pane";
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

function App() {
  return (
    <Router>
      {/** Navbar is placed here because it shoud be always on top of all elements in the page */}
      <NavPane />
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
