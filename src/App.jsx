import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Internship from "./components/Internship/Internship.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <div id="projects" style={{ backgroundColor: "var(--nav-bg)", color: "var(--text)" }}>
        <style>{`
          #projects, #projects > * {
            background-color: var(--nav-bg) !important;
            color: var(--text) !important;
          }
        `}</style>
        <Projects />
      </div>
      <Internship />
      <Contact />
      <Footer />
    </>
  );
}
