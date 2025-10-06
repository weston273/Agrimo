// components/ArticleCard.jsx
import React from 'react';
import './ArticleCard.css';
import CalendarIcon from './../../assets/images/calendar-icon.png'; // Use your own icons
import AdminIcon from './../../assets/images/user-icon.png';      // Use your own icons

const ArticleCard = ({ image, category, title, date, author }) => {
  return (
    <div className="article-card">
      <div className="article-card-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="article-card-category">{category}</div>
        <div className="article-card-arrow">↗</div>
      </div>
      <div className="article-card-meta">
        <div className="article-card-date">
          <img src={CalendarIcon} alt="calendar" />
          <span>{date}</span>
        </div>
        <div className="article-card-author">
          <img src={AdminIcon} alt="admin" />
          <span>{author}</span>
        </div>
      </div>
      <h3 className="article-card-title">{title}</h3>
    </div>
  );
};

export default ArticleCard;
