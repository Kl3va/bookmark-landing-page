import React from "react";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

const Sidebar = ({ logo, closeIcon, links, btnText }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-btn">
        <img src={logo} alt="logo" />
        <img src={closeIcon} alt="btn-close" />
      </div>
      <ul className="sidebar-links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
      <button>{btnText}</button>
      <div className="sidebar-icons">
        <ImFacebook2 />
        <BsTwitter />
      </div>
    </aside>
  );
};

export default Sidebar;
