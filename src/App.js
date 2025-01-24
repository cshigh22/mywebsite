import React, { useState } from "react";
import Modal from "./Modal";
import "./styles.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main-menu">
      {/* Header with Social Icons */}
      <header>
        <nav>
          <ul className="social-links">
            <li><a href="https://www.linkedin.com/in/kevin-lim-315b3b258/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/kev_lim7/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://github.com/cshigh22" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <div className="intro">
        <h1>Kevin Lim</h1>
        <p>I'm a data science student passionate about machine learning and software development.</p>
        <button onClick={() => setIsOpen(true)} className="resume-btn">View Resume</button>
      </div>

      {/* Modal for Resume */}
      {isOpen && <Modal closeModal={() => setIsOpen(false)} />}
    </div>
  );
}

export default App;
