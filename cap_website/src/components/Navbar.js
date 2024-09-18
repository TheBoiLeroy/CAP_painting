import React from 'react';
import './Navbar.css'; // We'll style the navbar in this file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img 
          src="https://via.placeholder.com/100" 
          alt="CAP painting" 
          className="logo"
        />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;