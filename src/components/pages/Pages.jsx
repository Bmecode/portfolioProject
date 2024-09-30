import { Home } from "../home/Home";
import { Routes, Route } from "react-router-dom";
import Header from "../common/Header";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Contact from "./Contact";
import { Footer } from "../common/Footer";
const Pages = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimda" element={<About />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/portfolyo" element={<Portfolio />} />
        <Route path="/referans" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default Pages;
