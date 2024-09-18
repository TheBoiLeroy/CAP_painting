import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <img 
            src="https://via.placeholder.com/100" 
            alt="Logo Placeholder" 
            className="logo"
          />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;