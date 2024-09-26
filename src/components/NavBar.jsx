import React, { useState } from 'react';
import '../styles/NavBar.css';
import logoImage from '/Users/sharonpatriarca/wedding-website/src/assets/GG Monogram - white.png'; // Replace with your logo file path

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      {/* Logo Container (Separate from the Nav Container) */}
      <div className="nav-logo-container">
        <img src={logoImage} alt="Wedding Logo" className="nav-logo" />
      </div>

      {/* Main Navigation Container */}
      <nav className={`nav-container ${mobileMenuOpen ? 'nav-container-mobile' : ''}`}>
        <ul className={`nav-links ${mobileMenuOpen ? 'nav-links-mobile' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#rsvp">RSVP</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </header>
  );
};

export default NavBar;