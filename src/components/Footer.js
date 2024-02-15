// In src/components/Footer.js
import React from 'react';
import './css/Footer.css'; // Path to the CSS file for styling the footer

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        © {new Date().getFullYear()} Factify News. All rights reserved.
      </div>
      <div className="footer-links">
        <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
