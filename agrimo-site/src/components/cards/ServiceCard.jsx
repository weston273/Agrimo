import { Link } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({ id, title, category, description, image }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-img" />
      <div className="service-info">
        <span className="category">{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/services/${id}`} className="read-more">
          ✕
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
