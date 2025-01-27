import React, { useState } from "react";
import "../styles/NavBar.css";
import logoImage from "../assets/GG Monogram - white.png"; // Replace with your logo file path
import { FaHome, FaInfo, FaMapMarkerAlt, FaClipboardList, FaCommentDots, FaAddressBook } from "react-icons/fa";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);

    // JavaScript to handle scroll-based animations
    document.addEventListener("DOMContentLoaded", () => {
      const logoContainer = document.getElementById("nav-logo-container");
      const logo = document.getElementById("nav-logo");

      // Scroll event listener
      window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;

        // Check scroll position to toggle the 'scrolled' class
        if (scrollPosition > 50) {
          logoContainer.classList.add("scrolled");
        } else {
          logoContainer.classList.remove("scrolled");
        }
      });
    });
  };

  return (
    <header>
      {/* Logo Container */}
      <div className="nav-logo-container">
        <img src={logoImage} alt="Wedding Logo" className="nav-logo" />
      </div>

      {/* Desktop Navigation Container */}
      <nav className="nav-container">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          {/* <li><a href="/about">About</a></li> */}
          {/* <li> */}
            {/* <a href="/event-details">Details</a> */}
          {/* </li> */}
          {/* <li><a href="/rsvp">RSVP</a></li> */}
          {/* <li> */}
            {/* <a href="/contact">Contact</a> */}
          {/* </li> */}
        </ul>
      </nav>

      {/* Mobile Bottom Navigation Container */}
      <div className={`bottom-nav ${mobileMenuOpen ? "active" : ""}`}>
        <a href="/" className="nav-icon">
          <FaHome />
        </a>
        {/* <a href="/about" className="nav-icon"><FaInfoCircle /></a> */}
        {/* <a href="/event-details" className="nav-icon"> */}
          {/* <FaInfo /> Updated to map marker icon */}
        {/* </a> */}
        {/* <a href="/rsvp" className="nav-icon"><FaClipboardList /></a> */}
        {/* <a href="/contact" className="nav-icon"> */}
          {/* <FaAddressBook /> Updated to comment/message icon */}
        {/* </a> */}
      </div>
    </header>
  );
};

export default NavBar;