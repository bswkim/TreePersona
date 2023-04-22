import React from "react";

export default function Translation({ doStuff, result }) {
  return (
    <div>
      <button className="action-btn" onClick={doStuff}>
        Show Results
      </button>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}
