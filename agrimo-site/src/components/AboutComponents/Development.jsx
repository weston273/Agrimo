import React from "react";
import "./Development.css";
import farmerImage from "../../assets/images/farmer-discuss.jpg";

const Development = () => {
  return (
    <section className="development-section">
      <div className="development-content">
        <h2>Agriculture matters to the future of development</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>

        <ul className="development-steps">
          <li><span>01</span> Schedule Your Experience</li>
          <li><span>02</span> Get Professional Advice</li>
          <li><span>03</span> Meet Our Expert Farmer</li>
          <li><span>04</span> Now Get Best Products</li>
        </ul>
      </div>
      <div className="development-image">
        <img src={farmerImage} alt="Development Discussion" />
      </div>
    </section>
  );
};

export default Development;
