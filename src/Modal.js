import React from "react";
import "./styles.css";

function Modal({ closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={closeModal}>&times;</button>
        <iframe 
          src="Kevin_Lim_Resume.pdf" 
          width="100%" 
          height="600px" 
          title="Kevin Lim Resume"
          style={{border: 'none'}}
        >
          <p>Your browser doesn't support PDF viewing. Please use a modern browser.</p>
        </iframe>
      </div>
    </div>
  );
}

export default Modal;
