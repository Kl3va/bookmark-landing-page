import React from "react";
import { download } from "../data";
import SecondaryHeader from "./SecondaryHeader";
import Button from "./Button";

const Download = ({ downloadContents }) => {
  return (
    <section className="section">
      <SecondaryHeader h2={download.header} text={download.text} />
      <div className="downloader">
        {downloadContents.map((content, index) => {
          const { logo, logoAlt, title, description, btnText } = content;
          return (
            <div className={`download-content download-content--${index + 1}`}>
              <img src={logo} alt={logoAlt} />
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="dotted"></div>
              <Button className="btn-large" text={btnText} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Download;
