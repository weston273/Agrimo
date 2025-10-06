import "./AboutOurHistory.css";
import farmerImage from "./../../assets/images/farmers.jpg";

function AboutOurHistory() {
  return (
    <section className="about-ourhistory">
      <img src={farmerImage} alt="farmers" className="about-img" />
      <div className="about-text">
        <h2>We’re Best Agriculture & Organic Farms</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour,
          or randomised words which don’t look even.
        </p>
        <ul>
          <li>✔ Garlic Farming</li>
          <li>✔ Lavender Farming</li>
          <li>✔ Gourmet Mushrooms</li>
          <li>✔ Fertilizer Distribution</li>
          <li>✔ Poultry Farming</li>
          <li>✔ Organic Fertilizer</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutOurHistory;
