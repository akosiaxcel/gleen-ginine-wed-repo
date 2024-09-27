import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-image">
        {/* Glass Card Container */}
        <div className="glass-card">
          <h1>Welcome to Our Wedding</h1>
          <p>
            We are excited to celebrate this beautiful day with our family and
            friends. Join us for an unforgettable experience as we start our
            new chapter together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;