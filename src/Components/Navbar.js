import React from "react";
import logo from "../logo-bookmark.svg";

//Harmburger icon
import hamburger from "../images/icon-hamburger.svg";
import { useGlobalContext } from "./context";

const Navbar = ({ links }) => {
  const { isSidebarOpen, openSidebar } = useGlobalContext();

  return (
    <nav className={`${isSidebarOpen ? "nav hide-nav" : "nav"}`}>
      <div className="nav__logo">
        <img src={logo} alt="logo" />
      </div>
      <img
        src={hamburger}
        alt="icon-open"
        className="open"
        onClick={openSidebar}
      />
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
