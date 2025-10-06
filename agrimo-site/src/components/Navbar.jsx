import React, { useState } from 'react';
import Logo from './../assets/images/logo.png';
import './Navbar.css';
import EllipseBullet from './../components/ElipseBullet';
import PhoneIcon from './../components/icons/PhoneIcon';
import SearchIcon from './../components/icons/SearchIcon';
import ArrowIcon from './../components/icons/ArrowIcon';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="NavbarContainer">
      {/* Left: Logo */}
      <div className="navbar-left">
        <span className="ArimoLogoContainer">
          <img src={Logo} className="AgrimoLogo" alt="Agrimo Logo" />
        </span>

        {/* Hamburger Menu (Visible on Mobile) */}
        <div
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li className="nav-link active dropdown-parent">
            HOME
            <span className="arrow-down">
              <ArrowIcon direction="down" color="#202c36" width={16} height={16} />
            </span>
            <div className="dropdown-menu">
              <a href="#">Home1</a>
              <a href="#">Home2</a>
              <a href="#">Home3</a>
            </div>
          </li>
          <li><EllipseBullet /></li>

          <li className="nav-link dropdown-parent">
            PAGES
            <span className="arrow-down">
              <ArrowIcon direction="down" color="#202c36" width={16} height={16} />
            </span>
            <div className="dropdown-menu">
              <a href="/about">About Us</a>
              <a href="/team">Our Team</a>
              <a href="/careers">Careers</a>
            </div>
          </li>
          <li><EllipseBullet /></li>

          <li className="nav-link">SERVICES</li>
          <li><EllipseBullet /></li>
          <li className="nav-link">PORTFOLIO</li>
          <li><EllipseBullet /></li>
          <li className="nav-link">BLOG</li>
          <li><EllipseBullet /></li>
          <li className="nav-link">CONTACT US</li>
        </ul>
      </div>

      {/* Right: Contact & Button */}
      <div className="navbar-right">
        <div className="navbar-right-first">
          <div className="phone-icon"><PhoneIcon /></div>
          <span className="contact-details">
            Call Us Now
            <div>(+1 (212) 255-511)</div>
          </span>
          <span className="search-icon">
            <SearchIcon width={30} height={30} color={'gold'} className="search-icon-svg" />
          </span>
        </div>

        <div className="get-in-touch">
          <button className="navbar-btn">
            <span>GET IN TOUCH</span>
            <ArrowIcon direction="top-left" color="#404A3D" width={30} height={30} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
