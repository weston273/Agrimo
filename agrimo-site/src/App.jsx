import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurHistory from "./pages/OurHistory";
import OurServices from "./pages/OurServices";
import ServiceDetails from "./pages/ServiceDetails";
import Faq from "./pages/Faq";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-history" element={<OurHistory />} />
      <Route path="/services" element={<OurServices />} />
      <Route path="/services/:id" element={<ServiceDetails />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
  );
}

export default App;
