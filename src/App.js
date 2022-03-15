import "./App.css";
import NavPane from "./mvc_Components/Nav_pane";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MVC_Home from "./mvc_Components/mvc_pages/MVC_Home";

function App() {
  return (
    <Router>
      <NavPane />
      <MVC_Home /> {/** Home page including Hero  */}
      <Routes>
        <Route exact path="/"></Route>
      </Routes>
    </Router>
  );
}

export default App;
