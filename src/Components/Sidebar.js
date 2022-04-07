import React from "react";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { useGlobalContext } from "./context";

const Sidebar = ({ logo, closeIcon, links, btnText }) => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar__svg">
        <img src={logo} alt="logo" />
        <img src={closeIcon} alt="btn-close" onClick={closeSidebar} />
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
