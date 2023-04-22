import React from "react";

export default function Translation({
  doStuff,
  handleButtonClick,
  generateImage,
  result,
}) {
  const handleBothClicks = () => {
    doStuff();
    handleButtonClick();
    generateImage();
  };

  return (
    <div>
      <button className="action-btn" onClick={handleBothClicks}>
        Show Results
      </button>
    </div>
  );
}
