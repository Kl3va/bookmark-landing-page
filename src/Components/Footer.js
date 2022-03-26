import React from "react";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

const Footer = ({ logo, footerLink }) => {
  return (
    <footer className="footer">
      <div className="main-footer">
        <div className="footer-img">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-links">
          {footerLink.map((link, index) => {
            return (
              <a key={index} href="#">
                {link}
              </a>
            );
          })}
        </div>
        <div className="footer-icons">
          <ImFacebook2 />
          <BsTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
