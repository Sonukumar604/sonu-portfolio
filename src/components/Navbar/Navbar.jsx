import React from "react";
import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

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
      <h2 className="logo" onClick={() => scrollToSection("hero")}>
        SONU
      </h2>

      {/* CENTER: Navigation Links */}
      <ul className="nav-links">
        <li onClick={() => scrollToSection("hero")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("internship")}>Internship</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      {/* RIGHT (but visually aligned with hero image): Theme Toggle */}
      <div className="theme-slot">
        <ThemeToggle />
      </div>
    </nav>
  );
}
