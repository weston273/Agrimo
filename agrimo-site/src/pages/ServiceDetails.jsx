import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ServiceDetails.css";

import serviceImg1 from "../assets/services/harvest.jpg";
import serviceImg2 from "../assets/services/farming.jpg";
import serviceImg3 from "../assets/services/soil.jpg";

const serviceData = {
  "harvest-concepts": {
    title: "Harvest Concepts",
    description:
      "Agriculture, with its allied sectors, is unquestionably the largest livelihood provider. Sustainable management of natural resources is crucial to achieving food security.",
    image: serviceImg1,
    points: [
      "Schedule Your Experience",
      "Get Professional Advice",
      "Meet Our Expert People",
    ],
    faqs: [
      {
        q: "What is Agricultural Biotechnology?",
        a: "Agricultural biotechnology is the use of scientific techniques to improve plants, animals, and microorganisms.",
      },
      {
        q: "Can the products be applied during rainy season?",
        a: "Yes, but with guidance from experts to ensure effectiveness.",
      },
      {
        q: "What vegetables can I grow in my hothouse?",
        a: "Leafy greens, tomatoes, cucumbers, and many more can be grown sustainably.",
      },
    ],
  },
  "farming-products": {
    title: "Farming Products",
    description: "Farming products description goes here...",
    image: serviceImg2,
    points: [
      "High quality seeds",
      "Sustainable farming",
      "Organic production",
    ],
    faqs: [
      { q: "What seeds are available?", a: "High-quality certified seeds." },
      { q: "Are they organic?", a: "Yes, organically grown and tested." },
    ],
  },
  "soil-fertilization": {
    title: "Soil Fertilization",
    description: "Soil fertilization service details here...",
    image: serviceImg3,
    points: [
      "Balanced nutrients",
      "Eco-friendly fertilizers",
      "Crop protection",
    ],
    faqs: [
      { q: "What fertilizers do you use?", a: "Eco-friendly organic fertilizers." },
      { q: "Is it safe for long term?", a: "Yes, tested for sustainability." },
    ],
  },
};

function ServiceDetails() {
  const { id } = useParams();
  const service = serviceData[id];

  if (!service) return <p>Service not found</p>;

  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="service-details-hero">
        <h1>{service.title}</h1>
        <p>AGRIMO &gt; SERVICES &gt; {service.title.toUpperCase()}</p>
      </section>

      {/* Main Content */}
      <section className="service-details-container">
        {/* Sidebar */}
        <aside className="service-sidebar">
          <h3>Our Service</h3>
          <ul>
            {Object.entries(serviceData).map(([key, s]) => (
              <li key={key} className={key === id ? "active" : ""}>
                {s.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <div className="service-content">
          <img src={service.image} alt={service.title} />
          <h2>Why Choose {service.title}</h2>
          <p>{service.description}</p>
          <div className="service-points">
            {service.points.map((point, i) => (
              <div key={i} className="point">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{point}</p>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="faq-section">
            <h3>Frequently Asked Questions</h3>
            {service.faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ServiceDetails;
