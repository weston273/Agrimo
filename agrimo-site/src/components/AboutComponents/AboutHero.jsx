import React from "react";
import "./AboutHero.css";
import heroImage from "../../assets/images/about-hero.jpg"; // replace with your hero img

const AboutHero = () => {
  return (
    <div
      className="about-hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="about-hero-overlay">
        <h1>About Us</h1>
        <p>Agrimo • About Us</p>
      </div>
    </div>
  );
};

export default AboutHero;
