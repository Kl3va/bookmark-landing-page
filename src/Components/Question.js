import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Question = ({ question, answer }) => {
  const [text, setText] = useState(false);
  return (
    <div className="content-box" onClick={() => setText(!text)}>
      <div className="content-box__question">
        <h3>{question}</h3>
        <MdKeyboardArrowDown
          className={`${text ? "svg svg--active" : "svg"}`}
        />
      </div>
      {text && <p>{answer}</p>}
    </div>
  );
};

export default Question;
