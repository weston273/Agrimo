import React from "react";
import "./Gallery.css";

import Farmer1 from "./../assets/images/farmer1.jpg";
import Farmer2 from "./../assets/images/farmer2.jpg";
import Farmer3 from "./../assets/images/farmer3.jpg";
import Farmer4 from "./../assets/images/farmer4.jpg";

const Gallery = () => {
  // Duplicate images for smooth infinite scroll
  const images = [Farmer1, Farmer2, Farmer3, Farmer4, Farmer1, Farmer2, Farmer3, Farmer4];

  return (
    <section className="gallery-section">
      <div className="gallery-track">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`farmer ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
