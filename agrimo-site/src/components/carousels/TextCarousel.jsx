import React from "react";
import "./TextCarousel.css";
import StarIcon from "../../assets/images/star-icon.png"; // Import your star icon

const TextCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        <div className="carousel-content">
          <span>Fruits</span>
          <img src={StarIcon} alt="star" className="star-icon" />
          <span>Agriculture</span>
          <img src={StarIcon} alt="star" className="star-icon" />
          <span>Farming</span>
          <img src={StarIcon} alt="star" className="star-icon" />
          <span>Organic</span>
          <img src={StarIcon} alt="star" className="star-icon" />
          <span>Vegetables</span>
          <img src={StarIcon} alt="star" className="star-icon" />
        </div>

        {/* Duplicate content for smooth infinite loop */}
        <div className="carousel-content">
          <span>Fruits</span>
          <img src={StarIcon} alt="star" className="star-icon" />
          <span>Agriculture</span>
          <img src={StarIcon} alt="star" className="star-icon" />
          <span>Farming</span>
          <img src={StarIcon} alt="star" className="star-icon" />
          <span>Organic</span>
          <img src={StarIcon} alt="star" className="star-icon" />
          <span>Vegetables</span>
          <img src={StarIcon} alt="star" className="star-icon" />
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
