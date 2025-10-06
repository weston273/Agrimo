import Navbar from "../components/Navbar";
import HeroOurHistory from "../components/OurHistoryComponents/HeroOurHistory";
import AboutOurHistory from "../components/OurHistoryComponents/AboutOurHistory";
import TextCarousel from "../components/carousels/TextCarousel";
import History from "../components/History";
import Footer from "../components/Footer";

function OurHistory() {
  return (
    <>
      <Navbar />
      <HeroOurHistory />
      <AboutOurHistory />
      <TextCarousel />
      <History />
      <Footer />
    </>
  );
}

export default OurHistory;
