import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/home";
import About from "../pages/about";
import Academics from "../pages/academics";
import News from "../pages/news";
import Contact from "../pages/contact";
import Enrollment from "../pages/enrollment";
import Parents from "../pages/parents";
import Ward from "../pages/ward";

export default function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/ward" element={<Ward />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
