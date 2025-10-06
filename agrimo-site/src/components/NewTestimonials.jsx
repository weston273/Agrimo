import React from "react";
import "./NewTestimonials.css";
import person1 from "../assets/images/person1.jpg";
import person2 from "../assets/images/person2.jpg";
import person3 from "../assets/images/person3.jpg";

const testimonials = [
  {
    name: "Daniel Craig",
    text: "I would recommend practitioners at this centre to everyone! They are great to work with and excellent trainers.",
    img: person1,
  },
  {
    name: "Amalia Dye",
    text: "Such a professional and friendly environment. They helped us improve our farming productivity greatly.",
    img: person2,
  },
  {
    name: "Henry Cavell",
    text: "Excellent service! They know what they’re doing and they deliver high-quality results.",
    img: person3,
  },
];

const NewTestimonials = () => {
  return (
    <section className="new-testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <p>"{t.text}"</p>
            <div className="testimonial-info">
              <img src={t.img} alt={t.name} />
              <h4>{t.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewTestimonials;
