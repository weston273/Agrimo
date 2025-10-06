import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/cards/ServiceCard";
import "./OurServices.css";

import serviceImg1 from "./../assets/services/harvest.jpg";
import serviceImg2 from "./../assets/images/farmer.jpg";
import serviceImg3 from "../assets/services/soil.jpg";
import serviceImg4 from "../assets/services/vegetables.jpg";
import serviceImg5 from "../assets/services/dairy.jpg";
import serviceImg6 from "../assets/services/supplies.jpg";
import serviceImg7 from "../assets/services/carrots.jpg";
import serviceImg8 from "../assets/services/nutrition.jpg";
import serviceImg9 from "../assets/services/organic.jpg";

const services = [
  {
    id: "harvest-concepts",
    title: "Harvest Concepts",
    category: "Fertilizer",
    description:
      "Farming and animal husbandry and discuss with farmers and scientists.",
    image: serviceImg1,
  },
  {
    id: "farming-products",
    title: "Farming Products",
    category: "Fruits",
    description:
      "Farming and animal husbandry and discuss with farmers and scientists.",
    image: serviceImg2,
  },
  {
    id: "soil-fertilization",
    title: "Soil Fertilization",
    category: "Fertilizer",
    description:
      "Farming and animal husbandry and discuss with farmers and scientists.",
    image: serviceImg3,
  },
  {
    id: "fresh-vegetables",
    title: "Fresh Vegetables",
    category: "Fruits",
    description:
      "Farming and animal husbandry and discuss with farmers and scientists.",
    image: serviceImg4,
  },
  {
    id: "dairy-production",
    title: "Dairy Production",
    category: "Fertilizer",
    description:
      "Farming and animal husbandry and discuss with farmers and scientists.",
    image: serviceImg5,
  },
  {
    id: "product-supplies",
    title: "Product Supplies",
    category: "Vegetable",
    description:
      "Farming and animal husbandry and discuss with farmers and scientists.",
    image: serviceImg6,
  },
  {
    id: "natural-carrots",
    title: "Natural Carrots",
    category: "Fruits",
    description:
      "Farming and animal husbandry and discuss with farmers and scientists.",
    image: serviceImg7,
  },
  {
    id: "nutrition-solutions",
    title: "Nutrition Solutions",
    category: "Vegetable",
    description:
      "Farming and animal husbandry and discuss with farmers and scientists.",
    image: serviceImg8,
  },
  {
    id: "organic-vegetables",
    title: "Organic Vegetables",
    category: "Fruits, Vegetable",
    description:
      "Farming and animal husbandry and discuss with farmers and scientists.",
    image: serviceImg9,
  },
];

function OurServices() {
  return (
    <>
      <Navbar />
      <section className="services-hero">
        <h1>Services</h1>
        <p>AGRIMO &gt; SERVICES</p>
      </section>
      <section className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default OurServices;
