import React, { useState } from "react";
import { validEmail } from "./test";

const Form = ({ text, heading, placeholder, btnText, errorMessage }) => {
  const [input, setInput] = useState({});
  const [error, setError] = useState(true);
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValid = validEmail.test(input.email);
    //console.log(emailValid)

    if (!emailValid) {
      setError(false);
    } else {
      setError(true);
      setEmail(input);
      // document.getElementById("email").value = "";
    }
  };

  return (
    <section className="section section--form">
      <div className="form-content">
        <p className="text">{text}</p>
        <h2>{heading}</h2>
        <form className="form">
          <div className="email-input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder={placeholder}
              value={email}
              onChange={handleChange}
            />
            {!error && <p className="error">Whoops, make sure it's an email</p>}
          </div>

          <input type="submit" value={btnText} onSubmit={handleSubmit} />
        </form>
      </div>
    </section>
  );
};

export default Form;
