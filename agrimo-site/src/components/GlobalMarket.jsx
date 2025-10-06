import React from 'react';
import './GlobalMarket.css'; // Import CSS
import HandIcon from './../assets/images/hand-icon.png';
import GlobalBackground from './../assets/images/globalbackground.png';
import BtnArrowIcon from './../components/icons/BtnArrowIcon';

const GlobalMarket = () => {
  return (
    <div
      className="global-market"
      style={{ backgroundImage: `url(${GlobalBackground})` }}
    >
      <div className="global-market__overlay">
        <div className="global-market__content">
          <div className="global-market__icon">
            <img src={HandIcon} alt="Hand Icon" />
          </div>
          <h2 className="global-market__text">
            We’re popular leader in <br />
            agriculture market globally
          </h2>
          <button className="global-market__button">
            Discover More
            <span className="global-market__button-icon">
              <BtnArrowIcon direction="right" size={16} color="black" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalMarket;
