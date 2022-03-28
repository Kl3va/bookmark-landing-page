import React, { useState } from "react";

const Form = ({ text, heading, placeholder, btnText, errorMessage }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
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
            <p>hhvmhvt</p>
          </div>

          <input type="submit" value={btnText} />
        </form>
      </div>
    </section>
  );
};

export default Form;
