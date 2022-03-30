import React, { useState } from "react";

const Form = ({ text, heading, placeholder, btnText, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [Error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    const emailValid = validEmail.test(email);

    if (!emailValid) {
      setError(true);
    } else {
      setError(false);
      setEmail("");
    }
  };

  return (
    <section className="section section--form">
      <div className="form-content">
        <p>{text}</p>
        <h2>{heading}</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="email-input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Whoops, make sure it's an email</p>
          </div>

          <input type="submit" value={btnText} />
        </form>
      </div>
    </section>
  );
};

export default Form;
