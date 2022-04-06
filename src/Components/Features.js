import React, { useState } from "react";
import { features } from "../data";
import SecondaryHeader from "./SecondaryHeader";
import Button from "./Button";

const Features = ({ featuresTitle, featuresContents }) => {
  //const { featuresTitle, featuresContents } = features;

  // const [contents, setContents] = useState(featuresContents);
  const [value, setValue] = useState(0);

  const { image, imageAlt, title, description, btnText } =
    featuresContents[value];
  return (
    <section className="section">
      <SecondaryHeader h2={features.header} text={features.text} />
      <div className="btn-group">
        {featuresTitle.map((btnTitle, index) => {
          return (
            <button
              key={index}
              className={`features-btn ${
                index === value && "features-btn--active"
              }`}
              onClick={() => setValue(index)}
            >
              {btnTitle}
            </button>
          );
        })}
      </div>
      <div className="content">
        <div className="content-img">
          <img src={image} alt={imageAlt} />
        </div>
        <div className="content-description">
          <h3>{title}</h3>
          <p>{description}</p>
          <Button className="btn-small" text={btnText} />
        </div>
      </div>
    </section>
  );
};

export default Features;
