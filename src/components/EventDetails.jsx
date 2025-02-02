import React from "react";
import "../styles/EventDetails.css";
import dressCodeImage from "../assets/dresscode.png"; // Update the path based on your folder structure
import dressCodeImage2 from "../assets/Untitled design.png"; // Update the path based on your folder structure
import dressCodeImage3 from "../assets/guests1.png";

const EventDetails = () => {
  return (
    <div className="event-details-container">
      {/* Top Event Details Section */}
      <div className="event-details-card">
        <h4>By the Grace of God and the blessing of our parents, we, Gleen and Ginine</h4>
        <h6>invite you to our wedding on</h6>
        <h2>
          <b>02 | 07 | 25</b>
          <br />
          FRIDAY
        </h2>
        <h5>at 3:00 PM</h5>
        <h3>
          <i className="fas fa-church" aria-hidden="true"></i> FELLOWSHIP BAPTIST CHURCH
        </h3>
        <h6>
          <i></i> Reception will follow at:
        </h6>
        <h4>
          <i></i> VISTA ALMAR, Himamaylan City
        </h4>
      </div>

      {/* Additional Info Section */}
      <div className="additional-info-container">
        <h4>Dresscode</h4>
        <h5>Strictly formal attire</h5>
        <img src={dressCodeImage} alt="Formal Dress Code" className="info-image" />
        <h5>Principal Sponsors</h5>
        <img src={dressCodeImage2} alt="Formal Dress Code" className="info-image" />
        <h6><b>Ladies:</b> Long Evening Gown -Dark Grey- <br></br>Gentlemen: Black Suit, Dark Grey Tie and White Long-sleeve.</h6><br></br>
        <h5>Guests</h5>
        <img src={dressCodeImage3} alt="Formal Dress Code" className="info-image3" />
        <h6> Ladies: Long Gown/Dress or Maxi Dress <br></br>Gentlemen: Long-sleeve or Short-sleeve Formal Polo -pair it with nice pants and shoes-Color: Champagne Beige <br></br>Note: Please do not wear T-shirts
        polo-shirts, maong/denim pants or rubber shoes.</h6><br></br>
        <h5>Note on Gifts</h5>
        <h6>We are blessed with love, laughter, and everything we need.<br></br>
        Your presence and prayers are the greatest gift you could give.<br></br>
        Howerver, should you wish to bless us further, a MONETARY GIFT would be warmly appreciated.</h6>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 All Rights Reserved | Created by <a href="https://wapdev.xyz" target="_blank" rel="noopener noreferrer">wapdev.xyz</a></p>
      </footer>
    </div>
  );
};

export default EventDetails;