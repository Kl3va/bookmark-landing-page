import React, { useState } from "react";
import { validEmail } from "./test";

const Form = ({ text, heading, placeholder, btnText, errorMessage }) => {
  //const [error, setError] = useState(false);
  const [emailState, setEmailState] = useState({
    email: "",
    errorMessage: "",
    isError: false,
  });

  const handleChange = (e) => {
    setEmailState({ ...emailState, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validEmail.test(emailState.email)) {
      setEmailState({
        ...emailState,
        errorMessage: "Whoops, make sure it's an email",
        isError: true,
      });
    } else {
      setEmailState({
        ...emailState,
        email: "",
        errorMessage: "",
        isError: false,
      });
    }
  };

  return (
    <section className="section section--form">
      <div className="form-content">
        <p className="text">{text}</p>
        <h2>{heading}</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="email-input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder={placeholder}
              value={emailState.email}
              onChange={handleChange}
            />
            {emailState.isError && (
              <p className="error">{emailState.errorMessage}</p>
            )}
          </div>

          <input type="submit" value={btnText} />
        </form>
      </div>
    </section>
  );
};

export default Form;
