import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar">
        {/* Logo Section */}
        <div className="navbar-logo">
          <a href="/">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">InvertTech</span>
          </a>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
          <li><a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a></li>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
          <li><a href="#catalog" onClick={() => setIsMenuOpen(false)}>Catalog</a></li>
          <li><a href="#spare-parts" onClick={() => setIsMenuOpen(false)}>Spare Parts</a></li>
          <li>
            <a href="#contact" className="contact-btn" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;