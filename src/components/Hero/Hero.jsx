import React, { useState, useEffect } from "react";
import "./Hero.css";
import man from "../../assets/man.png";

function useTypeWriter(words, speed = 80, delay = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (!reverse && subIndex === words[index].length) {
      setTimeout(() => setReverse(true), delay);
      return;
    }

    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return words[index].substring(0, subIndex);
}

export default function Hero() {
  const text = useTypeWriter([
    "Java Full-Stack Developer",
    "React Developer",
    "BCA Student",
  ]);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Sonu Kumar</span>
        </h1>

        <h3>
          I am a <span className="typed">{text}</span>
          <span className="cursor">|</span>
        </h3>

        <p>
          Passionate about full-stack development using Java & React!
        </p>
      </div>

      <div className="hero-image">
        <img src={man} alt="profile" />
      </div>
    </section>
  );
}
