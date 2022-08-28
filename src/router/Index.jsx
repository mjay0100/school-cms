import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/home";
import About from "../pages/about";
import Academics from "../pages/academics";
import News from "../pages/news";
import Contact from "../pages/contact";

export default function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Academics" element={<Academics/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
