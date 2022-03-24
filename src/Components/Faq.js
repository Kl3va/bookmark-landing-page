import React, { useState } from "react";

import { faqData } from "../data";
import SubHeader from "./SubHeader";
import SecondaryHeader from "./SecondaryHeader";
import Question from "./Question";
import Button from "./Button";

const Faq = ({ btnText, faqContents }) => {
  // const [text, setText] = useState(false);

  return (
    <section className="section section--3">
      <SecondaryHeader h2={faqData.header} text={faqData.text} />
      <div className="faq-box">
        {faqContents.map((content, index) => {
          return <Question key={index} {...content} />;
        })}
      </div>
      <Button className="btn-small" text={btnText} />
    </section>
  );
};

export default Faq;
