import React from "react";

export default function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "2rem", color: "var(--muted)" }}>
      © {new Date().getFullYear()} Sonu Kumar — All Rights Reserved
    </footer>
  );
}
