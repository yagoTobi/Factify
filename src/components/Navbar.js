// In src/components/Navbar.js
import React from 'react';
import './css/Navbar.css'; // Path to the CSS file for styling the navbar

const Navbar = () => {
  return (
    <header className="site-header">
      <div className="top-bar">
        {/* You can add items like search or menu icons here if needed */}
      </div>
      <div className="header-content">
        <h1 className="site-title">Factify</h1>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/us">U.S.</a>
          <a href="/world">World</a>
          <a href="/business">Business</a>
          <a href="/pricing">Pricing</a>
          <button className="login-button">Log In</button>
        </div>
      </div>
      <div className="bottom-bar">
        <span>Wednesday, February 14, 2024</span>
      </div>
    </header>
  );
};

export default Navbar;
