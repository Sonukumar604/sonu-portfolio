import React from "react";
import "./Internship.css";

export default function Internship() {
  return (
    <section id="internship" className="section">
      <h2 className="section-title">Internship</h2>

      <div className="internship-card">
        <h3 className="internship-role">Software Development Intern</h3>
        <p className="company-name">CodeAlpha (Remote)</p>

        <p className="internship-desc">
          Worked on real-world Java projects including data structures,
          algorithms, and backend services. Completed multiple development tasks
          such as project creation, UI improvements, and problem-solving using Java.
        </p>

        <div className="tech-tags">
          <span>Java</span>
          <span>DSA</span>
          <span>OOP</span>
          <span>Problem Solving</span>
        </div>

        <a
          href="#"
          target="_blank"
          className="internship-btn"
        >
          View Certificate →
        </a>
      </div>
    </section>
  );
}
