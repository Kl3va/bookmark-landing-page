import React from "react";
import logo from "../logo-bookmark.svg";

const Navbar = ({ links }) => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav__links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;