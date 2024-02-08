import React from "react";
// importing the logo
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data.js";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {/* const { id, href, text } = pageLink; */}
          {pageLinks.map(pageLink => (
            <PageLink key={pageLink.id} {...pageLink} itemClass="nav-link" />
          ))}
        </ul>

        <ul className="nav-icons">
          {/* const { id, href, icon } = link; */}
          {/* passing props from parent to child using spread operator  */}
          {socialLinks.map(link => (
            <SocialLink key={link.id} {...link} itemClass="nav-icon" />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
