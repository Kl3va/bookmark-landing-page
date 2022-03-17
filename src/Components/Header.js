import React from "react";
import Navbar from "./Navbar";
import SubHeader from "./SubHeader";
import { links, subHeader } from "../data";

const Header = () => {
  return (
    <header className="header">
      <Navbar links={links} />
      <SubHeader subHeader={subHeader} />
    </header>
  );
};

export default Header;
