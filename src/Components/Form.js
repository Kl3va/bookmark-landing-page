import React, { useState } from "react";
import SubHeader from "./SubHeader";

const Form = ({ text, heading, placeholder, btnText, errorMessage }) => {
  const [email, setEmail] = useState("");
  return (
    <section className="section section--form">
      <p>{text}</p>
      <h2>{heading}</h2>
      <form action="post" className="form">
        <div className="email-input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {<p></p>}
        </div>

        <input type="submit" value={btnText} />
      </form>
    </section>
  );
};

export default Form;
