import React from "react";
import { features } from "../data";
import SecondaryHeader from "./SecondaryHeader";

const Features = () => {
  return (
    <section className="section">
      <SecondaryHeader h2={features.header} text={features.text} />
    </section>
  );
};

export default Features;
