import React, { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent! (Demo)");
  }

  return (
    <section id="contact" className="section">
      <h2 style={{ color: "var(--accent)" }}>Contact</h2>

      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          placeholder="Email"
          style={{ marginTop: "1rem" }}
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <textarea
          placeholder="Message"
          style={{ marginTop: "1rem" }}
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
        />

        <button className="cta" style={{ marginTop: "1rem" }}>
          Send Message
        </button>
      </form>
    </section>
  );
}
