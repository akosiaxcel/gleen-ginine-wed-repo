import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-image">
        <div className="glass-card">
          <h1>Welcome to Our Wedding</h1>
          <p>
            We are excited to celebrate this beautiful day with our family and
            friends. Join us for an unforgettable experience as we start our
            new chapter together.
          </p>
          <Link to="/event-details">
            <button className="event-button">View Event Details</button>
          </Link>
        </div>
      </div>

      {/* Camera Icon */}
      <Link to="/gallery" className="camera-icon-link">
        <i className="fas fa-camera camera-icon"></i>
      </Link>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 All Rights Reserved | Created by <a href="https://wapdev.xyz" target="_blank" rel="noopener noreferrer">wapdev.xyz</a></p>
      </footer>
    </div>
  );
};

export default Home;