import "./App.css";
import NavPane from "./mvc_Components/Nav_pane";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavPane />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </Router>
  );
}

export default App;
