import React, { useState, useEffect } from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import About from "./components/about/about";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar"; // <-- Navbar import
import Projects from "./components/projects/Projects";
import Certificates from './components/Certificates/Certificates';
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import "./index.css"; // ✅ This contains your Tailwind and other styles

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.className = theme; // Apply body class for styling
  }, [theme]);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar theme={theme} toggleTheme={toggleTheme} /> {/* ✅ Pass theme and toggleTheme */}
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <About />
        <Projects />
        <Certificates />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
