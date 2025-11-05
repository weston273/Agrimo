import React from "react";
import AltLogo from './../assets/images/alt-logo.png'
import FacebookIcon from './../assets/images/facebook-logo.png'
import XIcon from './../assets/images/x-icon.png'
import LinkedInIcon from './../assets/images/linked-in-icon.png'
import InstagramIcon from './../assets/images/instagram-icon.png'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top bar */}
      <div className="footer-top">
        <nav className="footer-menu">
          <a href="#">Farmers</a>
          <a href="#">Organic</a>
          <a href="#">Foods</a>
          <a href="#">Product</a>
        </nav>
        <div className="footer-contact">
          <div className="contact-item">
            <img src="/assets/images/phone-icon.png" alt="Phone" />
            <span>+1 (212) 555-5111</span>
          </div>
          <div className="contact-item">
            <img src="/assets/images/email-icon.png" alt="Email" />
            <span>noreply@grimofoods.com</span>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-main">
        <div className="footer-left">
          <img
            src={AltLogo}
            alt="Grimo Logo"
            className="footer-logo"
          />
          <p>
            Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan risus.
            In vitae sapien viverra est iaculis lacinia mauris.
          </p>
          <div className="footer-social">
            <img className='facebook-icon' src={FacebookIcon} alt="Facebook" />
            <img src={XIcon} alt="Twitter" />
            <img src={LinkedInIcon} alt="Instagram" />
            <img src={InstagramIcon} alt="Instagram" />
          </div>
        </div>

        <div className="footer-center">
          <h4>Useful Link</h4>
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-center">
          <h4>Working Time</h4>
          <ul>
            <li>Mon - Fri: 9.00am - 5.00pm</li>
            <li>Saturday: 10.00am - 6.00pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Our Address</h4>
          <p>
            Old Westbury 256, New York<br />
            11201, United States
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
        </div>
        <p>Copyright © 2024 Grimo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
