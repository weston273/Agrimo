import React from "react";
import "./ServicesCards.css";

const services = [
  { title: "Harvest Concepts", img: "harvest.jpg" },
  { title: "Farming Products", img: "farming.jpg" },
  { title: "Soil Fertilization", img: "soil.jpg" },
  { title: "Fresh Vegetables", img: "vegetables.jpg" },
];

const ServicesCards = () => {
  return (
    <section className="services-cards">
      <h2>Best Agriculture Services</h2>
      <div className="cards-container">
        {services.map((service, i) => (
          <div className="card" key={i}>
            <img src={`./assets/images/${service.img}`} alt={service.title} />
            <h4>{service.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCards;
