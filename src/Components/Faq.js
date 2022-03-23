import React, { useState } from "react";

import { faqData } from "../data";
import SubHeader from "./SubHeader";
import SecondaryHeader from "./SecondaryHeader";
import Question from "./Question";

const Faq = ({ faqContents }) => {
  // const [text, setText] = useState(false);

  return (
    <section className="section section--3">
      <SecondaryHeader h2={faqData.header} text={faqData.text} />
      <div className="faq-box">
        {faqContents.map((content, index) => {
          return <Question key={index} {...content} />;
        })}
      </div>
    </section>
  );
};

export default Faq;
