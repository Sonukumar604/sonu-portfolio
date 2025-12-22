import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

// Icons
import { FaJava, FaDatabase, FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { 
  SiSpringboot, 
  SiHibernate, 
  SiMysql, 
  SiPostgresql, 
  SiDbeaver, 
  SiLeetcode, 
  SiTailwindcss, 
  SiVite 
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      
      {/* Section Title */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="skills-grid">

        {/* =========================================
            FRONTEND DEVELOPMENT  
        ==========================================*/}
        <motion.div
          className="skill-card"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3>
            <FaReact className="icon icon-react" /> Frontend Development
          </h3>

          <ul>
            <li><FaHtml5 className="icon-small icon-html" /> HTML5</li>
            <li><FaCss3Alt className="icon-small icon-css" /> CSS3</li>
            <li><FaJs className="icon-small icon-js" /> JavaScript (ES6+)</li>
            <li><FaReact className="icon-small icon-react" /> React.js (Hooks, Components)</li>
            <li><SiTailwindcss className="icon-small icon-tailwind" /> Tailwind CSS</li>
            <li><SiVite className="icon-small" /> Vite (React 19)</li>
            <li>Responsive Web Design</li>
            <li>Framer Motion (Animations)</li>
          </ul>
        </motion.div>

        {/* =========================================
            BACKEND DEVELOPMENT  
        ==========================================*/}
        <motion.div
          className="skill-card"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>
            <FaJava className="icon icon-java" /> Backend Development
          </h3>

          <ul>
            <li>Java (Core, Advanced, Corporate)</li>
            <li>OOP Concepts & Collections Framework</li>

            <li>
              <SiSpringboot className="icon-small icon-spring" /> Spring Boot
            </li>

            <li>Spring MVC</li>

            <li>
              <SiHibernate className="icon-small icon-hibernate" /> Hibernate ORM
            </li>

            <li>JPA (Java Persistence API)</li>
            <li>REST APIs</li>

            <li>
              <MdSecurity className="icon-small" /> JWT Authentication
            </li>
          </ul>
        </motion.div>

        {/* =========================================
            DATABASES & TOOLS
        ==========================================*/}
        <motion.div
          className="skill-card"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>
            <FaDatabase className="icon icon-db" /> Database & Tools
          </h3>

          <ul>
            <li><SiMysql className="icon-small" /> MySQL</li>
            <li><SiPostgresql className="icon-small" /> PostgreSQL</li>
            <li><SiDbeaver className="icon-small" /> DBeaver</li>
          </ul>
        </motion.div>

        {/* =========================================
            DSA SECTION
        ==========================================*/}
        <motion.div
          className="skill-card"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>
            <SiLeetcode className="icon icon-leetcode" /> Data Structures & Algorithms
          </h3>

          <ul>
            <li>Arrays, Strings, LinkedList, Stack, Queue</li>
            <li>HashMap, HashSet, Trees, BST</li>
            <li>Graphs (DFS, BFS)</li>
            <li>Sorting & Searching</li>
            <li>Recursion, Backtracking</li>
            <li>Dynamic Programming (DP)</li>
            <li>Sliding Window, Two Pointers</li>
            <li>Greedy Algorithms</li>
            <li>Time & Space Complexity</li>
            <li>Platforms: LeetCode, GFG</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
