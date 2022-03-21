import React from "react";
import { features } from "../data";
import SecondaryHeader from "./SecondaryHeader";

const Features = () => {
  const { featuresTitle, featuresContents } = features;
  return (
    <section className="section">
      <SecondaryHeader h2={features.header} text={features.text} />
      <div className="btn-group">
        {featuresTitle.map((btnTitle, index) => {
          return <button className="features-btn">{btnTitle}</button>;
        })}
      </div>
    </section>
  );
};

export default Features;
