import React from "react";

function HideBiweekly({ hideBiweekly, setHideBiweekly }) {
  const handleClick = () => {
    setHideBiweekly(!hideBiweekly);
  };

  return (
    <div className="container-fluid">
      <button type="button" className="btn" onClick={handleClick}>
        {hideBiweekly ? "Show Biweekly Meetups" : "Hide Biweekly Meetups"}
      </button>
    </div>
  );
}

export default HideBiweekly;
