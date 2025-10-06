import React from "react";
import "./AboutIntro.css";
import farmingLady from "../../assets/images/farming-lady.jpg"; // replace image

const AboutIntro = () => {
  return (
    <section className="about-intro">
      <div className="about-intro-image">
        <img src={farmingLady} alt="Organic Farming" />
      </div>
      <div className="about-intro-text">
        <h2>Currently we are growing and selling organic food</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even.
        </p>

        <div className="about-intro-stats">
          <div className="stat">
            <h3>435+</h3>
            <p>Growth Year of Harvest</p>
          </div>
          <div className="stat">
            <h3>Eco Farms Worldwide</h3>
            <p>We’ve partnered with farms in 40+ countries.</p>
          </div>
          <div className="stat">
            <h3>Special Equipment</h3>
            <p>Using modern technologies to grow quality food.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
