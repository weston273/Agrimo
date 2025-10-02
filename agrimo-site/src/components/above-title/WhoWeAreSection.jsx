import React from "react";
import "./WhoWeAreSection.css";

const WhoWeAreSection = ({ icon, title, children }) => {
  return (
    <div className="who-we-are-container-second">
      <div className="who-we-are-text-container">
        <div className="who-we-are-header">
          <span className="leaf-icon-container">
            <img src={icon} alt={`${title} Icon`} className="leaf-icon" />
          </span>
          <span className="who-we-are-header-text">
            <p>{title}</p>
          </span>
        </div>

        {children && (
          <div className="who-we-are-content">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhoWeAreSection;
    