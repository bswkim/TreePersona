import React from "react";
import "./App.css";

const CardOverlay = ({ show, onClose, header, content }) => {
  return (
    <div>
      {show && (
        <div className="overlay">
          <div className="card">
            <div className="header">
              <h2>{header}</h2>
              <button className="close-btn" onClick={onClose}>
                X
              </button>
            </div>
            <div className="content">{content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardOverlay;
