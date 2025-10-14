import React, { useEffect, useRef } from "react";
import "./Gallery.css";

import Farmer1 from "./../assets/images/farmer1.jpg";
import Farmer2 from "./../assets/images/farmer2.jpg";
import Farmer3 from "./../assets/images/farmer3.jpg";
import Farmer4 from "./../assets/images/farmer4.jpg";

const Gallery = () => {
  const trackRef = useRef(null);
  const images = [Farmer1, Farmer2, Farmer3, Farmer4, Farmer1, Farmer2, Farmer3, Farmer4];

  useEffect(() => {
    const track = trackRef.current;
    const items = track.querySelectorAll(".gallery-item img");

    const updateScales = () => {
      const trackRect = track.getBoundingClientRect();
      const centerX = trackRect.left + trackRect.width / 2;

      items.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const imgCenter = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - imgCenter);

        // Distance factor (closer to center = bigger)
        const maxDistance = trackRect.width / 2;
        const scale = 1.2 - (distance / maxDistance) * 0.4; // between 0.8 and 1.2
        const opacity = 1 - (distance / maxDistance) * 0.5; // fades slightly

        img.style.transform = `scale(${scale})`;
        img.style.opacity = opacity;
      });

      requestAnimationFrame(updateScales);
    };

    requestAnimationFrame(updateScales);
  }, []);

  return (
    <section className="gallery-section">
      <div className="gallery-track" ref={trackRef}>
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
