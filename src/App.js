import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import PublicationsModal from "./PublicationsModal";
import "./styles.css";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);

  // Prevent body scroll when modals are open
  useEffect(() => {
    if (isResumeOpen || isPublicationsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isResumeOpen, isPublicationsOpen]);

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
        <p>I am a senior at UC Berkeley majoring in Data Science and working with StylistGem, an exciting new startup aiming to connect technicians in a social-professional network like LinkedIn but built specifically for beauty and service professionals.</p>
        <p>Outside of work and school, I enjoy playing video games with my friends and I am a big sports fan. I love watching and playing football and soccer, with some basketball and a bit of baseball on the side. I proudly support Manchester United (yes, even through the heartbreak), the Atlanta Falcons (no more 28–3 jokes please), the Miami Heat, and the LA Dodgers.</p>
        <div className="button-group">
          <button onClick={() => setIsResumeOpen(true)} className="resume-btn">View Resume</button>
          <button onClick={() => setIsPublicationsOpen(true)} className="publications-btn">Publications</button>
        </div>
      </div>

      {/* Modals */}
      {isResumeOpen && <Modal closeModal={() => setIsResumeOpen(false)} />}
      {isPublicationsOpen && <PublicationsModal closeModal={() => setIsPublicationsOpen(false)} />}
    </div>
  );
}

export default App;
