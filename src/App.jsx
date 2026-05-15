import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
