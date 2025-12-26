import React from "react";
import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Link, scroller } from "react-scroll";

export default function Navbar() {
  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      smooth: true,
      duration: 500,
      offset: -80,
    });
  };

  return (
    <nav className="navbar">
      {/* LEFT: Logo */}
      <h1 className="logo" onClick={() => scrollToSection("hero")}>
        SONU
      </h1>

      {/* CENTER: Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="hero" activeClass="active" spy={true} smooth={true} duration={500} offset={-80}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" activeClass="active" spy={true} smooth={true} duration={500} offset={-80}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" activeClass="active" spy={true} smooth={true} duration={500} offset={-80}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500} offset={-80}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="internship" activeClass="active" spy={true} smooth={true} duration={500} offset={-80}>
            Internship
          </Link>
        </li>
        <li>
          <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500} offset={-80}>
            Contact
          </Link>
        </li>
      </ul>

      {/* RIGHT (but visually aligned with hero image): Theme Toggle */}
      <div className="theme-slot">
        <ThemeToggle />
      </div>
    </nav>
  );
}
