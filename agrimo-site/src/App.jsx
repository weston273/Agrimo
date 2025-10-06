import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurHistory from "./pages/OurHistory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-history" element={<OurHistory />} />
    </Routes>
  );
}

export default App;
