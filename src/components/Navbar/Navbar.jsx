import React from "react";
import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import {Link} from "react-scroll";
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* LEFT: Logo */}
      <h1 className="logo" onClick={() => scrollToSection("hero")}>
        SONU
      </h1>

      {/* CENTER: Navigation Links */}
      <ul className="nav-links">
        <Link to="hero" activeClass="active" spy={true} smooth={true} duration={500}>
          <li onClick={() => scrollToSection("hero")}>Home</li>
        </Link>
        <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}>
          <li onClick={() => scrollToSection("about")}>About</li>
        </Link>
        <Link to="skills" activeClass="active" spy={true} smooth={true} duration={500}>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
        </Link>
        <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500}>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
        </Link>
        <Link to="internship" activeClass="active" spy={true} smooth={true} duration={500}>
          <li onClick={() => scrollToSection("internship")}>Internship</li>
        </Link>
        <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </Link>
      </ul>

      {/* RIGHT (but visually aligned with hero image): Theme Toggle */}
      <div className="theme-slot">
        <ThemeToggle />
      </div>
    </nav>
  );
}
