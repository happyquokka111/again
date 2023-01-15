import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Iterative from "./Components/Kara.js";
import Persona from "./Components/Persona.js";
import Home from "./Components/Home.js";
import Eyetracking from "./Components/Eyetracking.js";
import Fleek from "./Components/Fleek.js";

import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="header"></div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="iterative" element={<Iterative />} />
          <Route path="pers" element={<Persona />} />
          <Route path="eye" element={<Eyetracking />} />
          <Route path="fleek" element={<Fleek />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
