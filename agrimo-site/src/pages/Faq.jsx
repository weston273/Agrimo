import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroFaq from "../components/FaqComponents/HeroFaq";
import FaqAccordion from "../components/FaqComponents/FaqAccordion";
import "./Faq.css"; // page-level wrapper styles if needed

function Faq() {
  return (
    <>
      <Navbar />
      <HeroFaq />

      <section className="faq-container">
        {/* Two-column FAQ */}
        <div className="faq-row">
          <div className="faq-column">
            <h2>General Questions</h2>
            <FaqAccordion
              question="01. What is Agricultural Biotechnology?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              open={true}
            />
            <FaqAccordion
              question="02. Can the products be applied during rainy season?"
              answer="Yes, with expert guidance for maximum effectiveness."
            />
            <FaqAccordion
              question="03. What vegetables can I grow in my hothouse?"
              answer="Tomatoes, cucumbers, leafy greens, and more."
            />
          </div>

          <div className="faq-column">
            <h2>Other Questions</h2>
            <FaqAccordion
              question="04. What is modern agriculture?"
              answer="Modern agriculture uses technology, innovation, and sustainable practices."
              open={true}
            />
            <FaqAccordion
              question="05. What are the 2 main types of farming?"
              answer="Subsistence farming and commercial farming."
            />
            <FaqAccordion
              question="06. What are the different types of greenhouse?"
              answer="Glass, polycarbonate, and plastic greenhouses."
            />
          </div>
        </div>

        {/* Bottom section */}
        <div className="faq-more">
          <h2>Happy to Answer All Your Questions</h2>
          <FaqAccordion
            question="01. What are the ideal temperature and humidity conditions for strawberry farming?"
            answer="Strawberries grow best in moderate temperatures with controlled humidity."
            open={true}
          />
          <FaqAccordion
            question="02. What are the common diseases and pests that affect strawberry plants?"
            answer="Powdery mildew, aphids, and spider mites are common issues."
          />
          <FaqAccordion
            question="03. What are the government initiatives in the agriculture sector?"
            answer="Subsidies, training programs, and research funding."
          />
          <FaqAccordion
            question="04. How can we adapt agriculture to the impacts of climate change?"
            answer="By adopting drought-resistant crops, sustainable irrigation, and crop rotation."
          />
          <FaqAccordion
            question="05. What can be done to reduce greenhouse gas emissions from agriculture?"
            answer="Organic fertilizers, reduced tillage, and better waste management."
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Faq;
