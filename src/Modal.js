import React from "react";
import "./styles.css";

function Modal({ closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={closeModal}>&times;</button>
        <iframe src="resume.html" width="100%" height="500px" title="Resume"></iframe>
      </div>
    </div>
  );
}

export default Modal;
