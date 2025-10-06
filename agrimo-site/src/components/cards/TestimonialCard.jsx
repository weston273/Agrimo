import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({
  name = "Martin Bailey",
  title = "Supervisor",
  text = "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
  image,
  rating = 4,
}) => {
  return (
    <div className="testimonial-card">
      {/* SVG quote icon (top-right corner) */}
      <div className="quote-icon">
        <svg width="60" height="50" viewBox="0 0 448 371" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30.5016 370.39H417.068L421.937 370.005L426.56 368.889L430.87 367.104L434.805 364.713L438.306 361.771L441.308 358.345L443.756 354.49L445.578 350.269L446.717 345.746L447.11 340.978V107.656L445.913 94.672L442.59 85.0146L437.565 78.0811L431.24 73.269L424.04 69.976L416.376 67.5884L408.653 65.5076L401.293 63.1312L394.709 59.8492L389.318 55.063L385.236 48.7282L382.27 41.8095L379.871 34.6025L377.473 27.4029L374.525 20.5026L370.46 14.1937L364.73 8.77556L356.775 4.54006L346.029 1.78291L331.941 0.799805H30.5016L25.6332 1.18418L21.0103 2.30034L16.7002 4.08546L12.7652 6.47671L9.26343 9.41864L6.26194 12.8447L3.8143 16.6996L1.99197 20.9203L0.853013 25.4441L0.459961 30.2118V340.978L0.853013 345.746L1.99197 350.269L3.8143 354.49L6.26194 358.345L9.26343 361.771L12.7652 364.713L16.7002 367.104L21.0103 368.889L25.6332 370.005L30.5016 370.39Z"
            fill="black"
          />
        </svg>
      </div>

      {/* Stars */}
      <div className="stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
        ))}
      </div>

      {/* Testimonial text */}
      <p className="testimonial-text">“{text}”</p>

      {/* Profile section */}
      <div className="testimonial-footer">
        <img src={image} alt={name} className="testimonial-image" />
        <div className="testimonial-info">
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-title">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
