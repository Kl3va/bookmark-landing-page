import React from "react";

const SecondaryHeader = ({ h2, text }) => {
  return (
    <div className="secondary-heading">
      <h2>{h2}</h2>
      <p>{text}</p>
    </div>
  );
};

export default SecondaryHeader;
