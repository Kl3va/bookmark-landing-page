import React from "react";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

const Sidebar = ({ logo, closeIcon, links, btnText }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar__svg">
        <img src={logo} alt="logo" />
        <img src={closeIcon} alt="btn-close" />
      </div>
      <ul className="sidebar__links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
      <button className="sidebar__btn">{btnText}</button>
      <div className="sidebar__icons">
        <ImFacebook2 />
        <BsTwitter />
      </div>
    </aside>
  );
};

export default Sidebar;
