import NavHero from './HomeComponents/NavHero'
// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import About from "../components/About";
import TextCarousel from '../components/carousels/TextCarousel';
import Services from "../components/Services";
import ChoosePerfect from "../components/ChoosePerfect";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import ExtraInfo from "../components/ExtraInfo";
import History from "../components/History";
import GlobalMarket from "../components/GlobalMarket";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavHero />
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <FeatureCards />
      <About />
      <TextCarousel />
      <Services />
      <ChoosePerfect />
      <Gallery />
      <Testimonials />
      <Partners />
      <ExtraInfo />
      <History />
      <GlobalMarket />
      <Articles />
      <Footer />
    </>
  );
}

export default Home;
