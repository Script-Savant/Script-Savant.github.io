import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Resume from "./Pages/Home/Resume";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
