import React from "react";
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutComponents/AboutHero";
import AboutIntro from "../components/AboutComponents/AboutIntro";
import ServicesCards from "../components/AboutComponents/ServicesCards";
import Development from "../components/AboutComponents/Development";
import History from "../components/History";
import GlobalMarket from "./../components/GlobalMarket";
import NewTestimonials from "../components/NewTestimonials";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutIntro />
      <ServicesCards />
      <Development />
      <History />
      <GlobalMarket />
      <NewTestimonials />
      <Footer />
    </>
  );
};

export default About;
