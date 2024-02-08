import React from "react";
import { pageLinks, socialLinks } from "../data";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {/* const { id, href, text } = link; */}
        {pageLinks.map(link => {
          return <PageLink key={link.id} {...link} itemClass="footer-link" />;
        })}
      </ul>
      <ul className="footer-icons">
        {/* const { id, href, icon } = link; */}
        {socialLinks.map(link => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
