import React from "react";
import { subHeader } from "../data";

const SubHeader = ({ SubHeader }) => {
  const { h1, p, img, button } = subHeader;

  return (
    <div className="subHeader">
      <div className="subHeader__primary">
        <h1>{h1}</h1>
        <p>{p}</p>
        <div className="subHeader-btns">
          {button.map((btn, index) => {
            return (
              <button key={index} className="btn">
                {btn}
              </button>
            );
          })}
        </div>
      </div>

      <div className="subHeader__img">
        <img src={img} alt="header-img" />
      </div>
    </div>
  );
};

export default SubHeader;
