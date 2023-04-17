import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Tiles } from "./components/tiles";
import { FaBars, FaTimes } from "react-icons/fa";
import { BckgSwitch } from "./components/switchBackground";
import { LogRegPage } from "./components/registration/log_reg_page";

function App() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">

      <header>
        <h3>JMDb</h3>
        <nav ref={navRef}>
          <a href="/">Home</a>
          <a href="/components/functions">Top Rating</a>
          <a href="/components/registration/log_reg_page">Login/Register</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>

      <BckgSwitch/>

      <Routes>
        <Route path="/components/functions" element={<Tiles />} />
        <Route path="/components/registration/log_reg_page" element={<LogRegPage />} />
      </Routes>

    </div>
  );
}

export default App;
