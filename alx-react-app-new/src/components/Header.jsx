import React from "react";

export default function Header() {
  const headerStyle = {
    backgroundColor: "navy",
    color: "white",
    textAlign: "center",
    padding: "20px 12px",
    borderRadius: "6px"
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ margin: 0, fontSize: "1.8rem" }}>My Favorite Cities</h1>
      <p style={{ margin: "6px 0 0", fontSize: "0.9rem", opacity: 0.9 }}>
        A small list of places I love
      </p>
    </header>
  );
}
